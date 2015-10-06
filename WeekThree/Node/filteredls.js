var fs = require('fs');
var path = require('path');

var file1 = process.argv[2];
var file2 = process.argv[3];

fs.readdir(file1, function (err, list) {
	list.filter(function(file) {
		return path.extname(file) === '.' + file2;
	}).forEach(function(file) {
		console.log(file);
	})
});
