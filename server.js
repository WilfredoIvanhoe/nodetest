http = require('http');
fs = require('fs');
var server= http.createServer(function(res,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	fs.createReadStream('index.html').pipe(res);
});

server.listen(Number(process.env.PORT||3000));