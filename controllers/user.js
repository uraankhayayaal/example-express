const User = require('../models').User;

module.exports = {
    create(req, res, next){
        console.log(req.body); 
        return User.create({
            username: req.body.username,
        })
        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error));
    },
    index(req, res){
        User.findAll().then(users => {
            res.send(JSON.stringify(users));
        })
    },
    view(req, res){
        User.findById(req.params.id).then(user => {
            res.send(JSON.stringify(user));
        })
    },
};