var app = angular.module('myApp', ['ngRoute'])

	app.config(['$routeProvider', function($routeProvider){
			$routeProvider
				.when('/', {
					controller: 'WelcomeController',
					templateUrl:'../views/welcome.html'
				})
				.when('/tweets', {
					controller: 'TweetsController',
					templateUrl: '../views/tweets.html'
				})
				.otherwise({
					redirectTo: '/'
				});

}]);
