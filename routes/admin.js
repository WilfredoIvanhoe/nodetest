var express = require('express');
var router = express.Router();

/* GET galery listing. */
router.get('/', function(req, res, next) {
  res.render('admin',{});
});
router.get('/login',function(req, res, next){
	res.writeHead(301, {
  		Location: '/admin'
	});
	res.end();
});
router.post('/login',function(req, res, next){
	var userName = request.body.userName;
	var password = request.body.userPassword;

	if(userName = "admin" && password = "admin")
		res.writeHead(301, {
  			Location: '/admin/'
		});
	else
		res.writeHead(301, {
  			Location: '/admin'
		});
	
});
router.get(admin);
module.exports = router;
