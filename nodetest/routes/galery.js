var express = require('express');
var router = express.Router();

/* GET galery listing. */
router.get('/', function(req, res, next) {
  res.render('galery',{ title: 'Image-Galery' });
});

module.exports = router;