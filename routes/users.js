const userController = require('../controllers').user;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', userController.index);

router.get('/:id', userController.view);

router.post('/', userController.create);

module.exports = router;
