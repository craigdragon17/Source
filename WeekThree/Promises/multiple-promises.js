var q = require('q');
var d1 = q.defer();
var d2 = q.defer();

function all (prom1, prom2) {
	var gd1 = q.defer();
	var counter = 0, val1, val2;
	prom1.then(function(result){
		val1=result;
		++counter;
		if(counter >= 2) gd1.resolve([val1, val2])
	}).then(null, gd1.reject).done();
	
	prom2.then(function(result){
		val2 = result;
		++counter;
		if(counter >= 2) gd1.resolve([val1, val2])	
	}).then(null, gd1.reject).done();
	
	return gd1.promise;
}

all(d1.promise, d2.promise).then(console.log).done();

setTimeout(function(){
	d1.resolve('PROMISES');
	d2.resolve('FTW');
}, 200);