//Logic for page actions here. 

app.controller('blog.controller.js', ["$scope", "$location", "ParseData", function($scope, $location, ParseData){
	$scope.post = [];
	$scope.greetings = "Hey There!";
	$scope.newPost = function (view) {
		$location.path(view);
	}
	
	ParseData.query().$promise.then(function(data){
		$scope.post = data.results;
	})
	
}])