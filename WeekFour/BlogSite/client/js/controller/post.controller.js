//Logic for page actions here. 
app.controller('post.controller.js', ["$scope", "$location", "ParseData", function ($scope, $location, ParseData) {
	$scope.greeting = "Yo!";
	
	$scope.post = function (view) {
		var post = {
			author: $scope.author,
			title: $scope.title,
			content: $scope.content
			}
	
	ParseData.save(post);
	$location.path(view);
	}
}]);