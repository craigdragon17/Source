var app = angular.module('myBlogApp', ['ngResource', 'ngRoute', 'myBlogApp.controller', 'myBlogApp.services']);

app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
			.when('/newpost', {
				templateUrl: 'views/newpost.html',
				controller: 'BlogCreateController'
			})
			.when('/home', {
				templateUrl: 'views/blogposts.html',
				controller: 'BlogListController'
			})
			.otherwise({
				redirectTo: '/home'
			})
}]);