const userController = require('../controllers').user;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', userController.index);

router.post('/', userController.create);

module.exports = router;
