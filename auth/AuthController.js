// AuthController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const User = require('../models').User;
var VerifyToken = require('./VerifyToken');


var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const authConfig = require(__dirname + '/../config/authConfig');

router.post('/register', function(req, res) {
  
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.findOrCreate({where: {username: req.body.username, email : req.body.email}, defaults: {password : hashedPassword}})
      .spread((user, created) => {
        // console.log(user.get({
        //   plain: true
        // }));
        // console.log(created);
        if (!user) return res.status(500).send("There was a problem registering the user.")
        // create a token
        var token = jwt.sign({ id: user.id }, authConfig.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    });
});

router.get('/me', VerifyToken, function(req, res, next) {
  // res.status(200).send(decoded);
  User.findOne({
    where: { id: req.userId },
    attributes: ['id', 'username', 'email', 'updatedAt', 'createdAt']
  }).then( user => {
    //if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    
    res.status(200).send(user);
  });
});

router.post('/login', function(req, res) {
  User.findOne({ email: req.body.email }).then(user => {
    //if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    var token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });
});

router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

router.use(function (user, req, res, next) {
  res.status(200).send(user);
});

module.exports = router;