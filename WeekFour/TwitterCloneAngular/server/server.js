var http = require('http');
var routing = require('./routing.js');

var server = http.createServer(routing.handleRequests);
var port = 3000;
server.listen(port);
console.log('server listening on port ' + port);
