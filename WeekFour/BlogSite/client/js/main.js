//Use to instantiate app, connect factory & controllers and configure app.
var app = angular.module('ethanBlog', ['ngRoute','ngResource']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl:"../views/blogpost.html",
		controller:"PostListController"
		
	})
	.when('/newpost', {
		templateUrl:"../views/newpost.html",
		controller:"NewPostController"
	})
	.otherwise({
		redirectTo:'/'
	})
}]);

