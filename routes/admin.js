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
	console.log("login")

	var userName = req.body.userName;
	var password = req.body.userPassword;

	if(userName == "admin" && password == "admin")
		res.redirect('/admin/apanel')
	else
		res.redirect('/admin')
	
});
router.get('/apanel', function (req,res){
	res.render('apanel')
});

module.exports = router;
