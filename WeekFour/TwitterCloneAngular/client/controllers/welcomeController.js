app.controller('WelcomeController', ['$scope','$http', '$location', function($scope, $http, $location){
$scope.login = function(view){
	$location.path(view +'/tweets' + $scope.user)
};
	}])
