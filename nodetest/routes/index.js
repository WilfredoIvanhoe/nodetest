var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var numbSchema=new Schema({
  x:Number
});
var Numbs= mongoose.model('Numbers',numbSchema);
/* GET home page. */
//mongoose.model('Mydb',{x:String});
router.get('/', function(req, res, next) {

  mongoose.connect('mongodb://localhost/lucy');
  var numb=new Numbs({
  	x:43
  });
    numb.save(function(err,numb){
  	if(err){
  		res.end(err);
      console.log(err);
  		mongoose.disconnect();
  	}
  });
  Numbs.find(function(err,objects){
    if(err)
      res.end(err);
    //res.send(objects);
    res.render('index', { 'title': 'Lucy the cat' , 'objects': objects});
    mongoose.disconnect();
  });
});

module.exports = router;