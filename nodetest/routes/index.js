var express = require('express');
var router = express.Router();

/* GET home page. */
//mongoose.model('Mydb',{x:String});
router.get('/', function(req, res, next) {
  res.render('index', { 'title': 'Lucy the cat'});
});

module.exports = router;