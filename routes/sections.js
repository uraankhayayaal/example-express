var express = require('express');
var router = express.Router();

/* GET sections listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource for Sections');
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id
    res.send(id);
    
});

module.exports = router;
