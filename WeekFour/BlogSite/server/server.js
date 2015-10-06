var http = require('http');
var routing = require('./rourting.js');
var server = http.createServer(routing.handleRequests);
var port = 3000;
server.listen(port);
console.log('server is listening to port' + port);
