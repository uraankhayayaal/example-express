var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Ayaal" });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: "Admin14.ru" });
});

/* GET sign up page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: "Admin14.ru" });
});

module.exports = router;
