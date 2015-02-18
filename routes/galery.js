var express = require('express');
var router = express.Router();

/* GET galery listing. */
router.get('/', function(req, res, next) {
  res.render('galery',{ title: 'Image-Galery' });
});
router.get('/layers',function(req,res,next){
	res.render('layers',{});
});
module.exports = router;