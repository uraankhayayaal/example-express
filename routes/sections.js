const sectionController = require('../controllers').section;

var express = require('express');
var router = express.Router();

/* GET sections listing. */
router.get('/', sectionController.index);

router.post('/', sectionController.create);

module.exports = router;
