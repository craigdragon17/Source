(function() {
	var app = angular.module('angularBusy', []);
	
	app.controller('exampleController',['$scope', function ($scope){
		$scope.message = '';
		$scope.alertInput = function() {
			alert($scope.message);
		}
		$scope.clickMe = function() {
		alert('Hi class!');
		}
		$scope.hoverColor = "lightsalmon";
		$scope.toggleColor = function(isOver) {
			$scope.hoverColor = 
		}
		$scope.getRandomColor = function getRandomColor() {
    		var letters = '0123456789ABCDEF'.split('');
   			 var color = '#';
    		for (var i = 0; i < 6; i++) {
       			 color += letters[Math.floor(Math.random() * 16)];
    			}
    		return color;
		}
	}]);
})();
	//1. Make a button that displays an alert when clicked using Angular.
	
	
//2. Make a button and text box. When the button is clicked,
// display an alert with the message that is typed in the text box using Angular.
	
//3. Create a div in HTML then add JavaScript to make it change colors whenever your mouse hovers over the div.
//The div should return to it's original color when the mouse exits the div using Angular.
 
 
//4. Put some text in a paragraph. Make it where when you click on the paragraph text, the color of the text switches to red.
//Once complete, try making it switch to a random color each click using Angular.


//5. Add a span that says your name in it to an empty div using Angular.
 	

//6.Create a <ul> in HTML. From JavaScript add an <li> for items in an array that you create using Angular.