var fs = require('fs');
var filename = process.argv[2];
var k = fs.readFileSync(filename);
var y = k.toString();

console.log(y.split('\n').length -1);


// var fs = require('fs')
    
   // var contents = fs.readFileSync(process.argv[2])//
   // var lines = contents.toString().split('\n').length - 1//
    //console.log(lines)//