app.controller('TweetsController', ['$scope', '$http', '$routeParams', function($scope, $http,$routeParams) {
    $scope.tweets = [];
    $scope.tweetUser = $routeParams.user;
    function postTweets() {
      var tweet = {
        text: $scope.tweet.text,
        userName: $scope.tweetUser,
      };
      $http.post('http://localhost:3000/message', JSON.stringify(tweet)).error(function(err){
        console.error(err);
      });
      $scope.tweets.unshift(tweet);
      $scope.tweet1.text = '';
    };
    function getTweets() {
      $http.get('http://localhost:3000/messages').then(function (results){
        for(var i = 0; i < results.data.length; i++){
          var tweet = results.data[i];
          $scope.tweets.unshift(tweet);
        }
      }).error(function(err){
        console.log(err)
      });
    };

  }]);
