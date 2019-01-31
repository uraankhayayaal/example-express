const portfolioController = require('../controllers').portfolio;

var express = require('express');
var router = express.Router();

/* GET portfolios listing. */
router.get('/', portfolioController.index);

router.post('/', portfolioController.create);

router.get('/:id', portfolioController.view);

router.put('/:id', portfolioController.edit);

router.delete('/:id', portfolioController.delete);

module.exports = router;
