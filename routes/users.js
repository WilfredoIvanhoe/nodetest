var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var numbSchema=new Schema({
  x:Number
});
var Numbs= mongoose.model('Numbers',numbSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.connect('mongodb://wilfredoivanhoe:chichicuilote05@ds045057.mongolab.com:45057/wilfredoivanhoe');
  var numb=new Numbs({
  	x:43
  });
  /**numb.save(function(err,numb){
  	if(err){
  		res.end(err);
      console.log(err);
  		mongoose.disconnect();
  	}
  });**/
  Numbs.find(function(err,objects){
    if(err)
      res.end(err);
    //res.send(objects);
    res.send(objects);
    mongoose.disconnect();
  });
  
});

module.exports = router;
