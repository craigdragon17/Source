/* Require node modules to implement */
var fs = require('fs');
var path = require('path');
var url = require('url');

function reqResponse(res, fileContents, contentType, statusCode) {
	res.writeHeader('content-type', contentType);
	res.write(fileContents);
	res.end();
};

function requestPartialHTML(req, res){
reqResponse()
};

function requestHTML(req, res) {
	reqResponse(res, getFile(url.parse(req.url).pathname), 'text/html', 201);
};

function requestCSS(req, res) {
	reqResponse(res, getFile(url.parse(req.url).pathname), 'text/json', 201);
};

function requestJS(req, res) {
	reqResponse(res, getFile(url.parse(req.url).pathname), 'application/javascript', 201);
};

function getFile(relativePath) {
	var p = path.join(__dirname, '../client' + relativePath);
	fs.readFile(p, function(err, data){
		if(!err) {
			return data;
		}
	});
}
/* Below is the coffeescript derivative of the getFile function above
getFile = (relativePath) ->
  p = path.join(__dirname, '../client' + relativePath)
  fs.readFile p, (err, data) ->
    if !err
      return data
    return
  return */
/*createServer takes in a function to handle requests. Here is where you can create a handler for get and post requests. Note: req(request) and res(response) come from node's http module. They include both incoming information like urls and outgoing like content */

/*In order to complete the project, this callback will need to handle get requests, post requests and server up other files like css.

Hint: creating a function to replace the anonymous function may be useful.
		EXAMPLE:
		function requestHandler(req, res) {
			if(request url === '/'){
				// handle this way
			} else if(request url === '/messages'){
				if(request method  === 'GET'){
					// handle this way
				}

				...
		};

		var server = http.createServer(requestHandler)


*/
function requestHandler(req, res){
	var reqURL = url.parse(req.url).pathname;
	if(reqURL === '/'){
		requestHTML(req, res);
	} else if(req.url.slice(-2) === 'js'){
		requestJS(req, res);
	} else if(req.url.slice(-3) === 'css'){
		requestCSS(req, res);
	} else if(req.url.slice(-4) === 'html'){
		requestPartialHTML(req, res);
	} else {
		res.statusCode = 404;
		res.end();
	}
};

var server = http.createServer(requestHandler);

/*Requests are completed over port numbers and each one needs a unique number. Most port numbers between 0 - 1024 are reserved so here 3000 is a standard testing port to use. More on port numbers: https://en.wikipedia.org/wiki/Port_(computer_networking) */
var port = 3000;

server.listen(port);
console.log('Listening on port', port);
