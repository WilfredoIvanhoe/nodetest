var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* GET home page. */
//mongoose.model('Mydb',{x:String});
router.get('/', function(req, res, next) {
  /**
  mongoose.model('Mydb').find(function(err,objects){
    
    res.send(objects);
  	//res.render('index', { 'title': 'Lucy the cat' , 'objects': obj});
  	mongoose.disconnect();
  });**/
mongoose.connect('mongodb://localhost/mydb');

var numberSchema = new Schema({
	x: String
});
var Numbers= new mongoose.model('Numbers',numberSchema);
  var number=new Numbers({
  	x:'d'
  });
  number.save(function(err,number){
  	if(err){
  		res.send(err);
  		mongoose.disconnect();
  	}
  	res.render('index', { 'title': 'Lucy the cat' , 'objects': number});
  	mongoose.disconnect();
  });
});

module.exports = router;