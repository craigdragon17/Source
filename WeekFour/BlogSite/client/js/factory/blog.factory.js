//The action to call the parse service should be here.

app.factory('ParseData', ['$http', '$resource', function ($http, $resource){
	
	var headers = {
		'X-Parse-Application-Id':'',
		'X-Parse-REST-API-key':'',
		"Content-Type": "application/json"
	}
	
	var ParseFactory = $resource('',{},{
		'query':{
			headers: headers
		},
		'save':{
			method: 'POST',
			headers: headers
		}
		
	})
	return ParseFactory;	
}]);


