http = require('http');
fs = require('fs');
var server= http.createServer(function(res,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	fs.createReadStream('./').pipe(res);
	res.end('<H1>Chinga tu padre Jose</H1>');
});

server.listen(Number(process.env.PORT||3000));