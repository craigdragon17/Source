var http = require('http');
var x = process.argv[2];

http.get(x, pong);

function pong (response) {
	response.setEncoding('utf8');
	response.on("data", console.log);
	response.on("error", console.error);
}