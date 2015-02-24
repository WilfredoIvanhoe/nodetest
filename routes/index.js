var express = require('express');
var router = express.Router();

/* GET home page. */
//mongoose.model('Mydb',{x:String});
router.get('/', function(req, res, next) {
  res.render('layers');
});

module.exports = router;