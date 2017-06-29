var express = require ("express");
var http = require ("http");
var path = require ("path");
var app = express(); //creates an express server
var options = { method: 'HEAD', host: 'stackoverflow.com', port: 80, path: 
'/'};
var req = http.request(options, function(res){
	console.log(JSON.stringify(res.headers));
});
req.end();

app.get('/', function (req, res){  // '/' == route, can have multiple routes like /xbitches; req = request; res = response
	console.log(req.header);
	res.sendFile(path.join(__dirname, 'index.html')); //send something back to function, can send files/pages, acts as return statement.
});

app.get('/test', function (req, res){  // '/' == route, can have multiple routes like /xbitches; req = request; res = response
	console.log(req.header);
	res.send('hello world'); //send something back to function, can send files/pages, acts as return statement.
});

app.post('/', function (req, res){
	
})

app.listen(3000, function(){	//server is listening at port 3000
	console.log('Example app listening on port 3000!'); 
})
