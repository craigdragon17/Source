var http = require('http');
var bl = require('bl');
var x = process.argv[2];

http.get(x, function (response){
  response.pipe(bl (function(err, data) {
		if (err)
		return console.error(err)
		
		data = data.toString();
		console.log(data.length);
		console.log(data);
  }))
})