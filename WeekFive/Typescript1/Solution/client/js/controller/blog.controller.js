var app = angular.module('myBlogApp.controller', []);

app.controller('BlogCreateController', ['$location','$scope', 'Blog',
	function($location, $scope, Blog){

		$scope.switchView = function(view){
			$location.path(view);
		};

		$scope.blogPost = function(){
			$scope.blog.timePretty = moment().format("dddd, MMMM Do YYYY");
			Blog.save($scope.blog).$promise.then(function(data){
				alert('message sent!');
			});
		}
}]);

app.controller('BlogListController', ['$location', '$scope', 'Blog',
	function($location, $scope, Blog){

		$scope.switchView = function(view){
			$location.path(view);
		};

		$scope.posts = Blog.query().$promise.then(function(data){
			$scope.blog = data.results;
		});
}]);


