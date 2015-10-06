var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, newlines);

function newlines(error, text) {
	var lineCount = text.toString().split('\n').length - 1;
	if (error) {
	return console.log('errors');
	} else {
		return console.log(lineCount);
	}
}