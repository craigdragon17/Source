var app = angular.module('myBlogApp.services', ['ngResource']);
app.factory('Blog', ['$resource', function($resource){

	var reqURL = 'https://api.parse.com/1/classes/Posts';
	var reqHeaders = {
				"X-Parse-Application-Id": "4Qyb5ODvmMR3WC88A4tOiLD4vcansVrA0ovlg3xn",
				"X-Parse-REST-API-Key": "wOd5WMNu6sd4jLYYpzCpntGTKPybOLoT8Gian0Z9"
			}

	var Posts = $resource(reqURL, {}, {
		'query': {
			headers: reqHeaders
		},
		'save' : {
			method: 'POST',
			headers: reqHeaders
		},
		'get': {
			headers: reqHeaders
		}
	});

	return Posts;
}]);


