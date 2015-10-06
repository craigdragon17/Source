var http = require('http');
var arr = [];
var url = progress.argv.slice(2);
var data = function (data){
	
}
var res = function (response) {
	response.setEncoding('utf8');
	response.on('data', data)
}