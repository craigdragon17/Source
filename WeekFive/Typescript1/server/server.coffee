http = require('http');
fs = require('fs');
path = require('path');
url = require('url');

reqResponse = (res, data, contentType, statusCode) -> statusCode = statusCode or 200;
header = 'Content-Type': contentType; res.writeHead statusCode, header; res.write()
