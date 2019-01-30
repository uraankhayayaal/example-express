const portfolioController = require('../controllers').portfolio;

var express = require('express');
var router = express.Router();

/* GET portfolios listing. */
router.get('/', portfolioController.index);

router.post('/', portfolioController.create);

module.exports = router;
