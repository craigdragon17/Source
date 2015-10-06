$(document).ready(function(){
	var tweets = [];
	$('.btn').click(function(){
		if(!validateTweet()){
			alert('Missing data!');
			return;
		}
		var tweetText = $('.tweet').val();
		postData(tweetText, $('.user').val());
	});
/*Using document ready runs code only after the DOM is ready for js code to run more on that here: https://learn.jquery.com/using-jquery-core/document-ready */
	 function postData(text, userName) {
        var tweet = {};
        tweet.text = text;
        tweet.userName = userName;
        $.ajax({
            url: '/messages',
            method: 'POST',
            data: JSON.stringify(tweet)
        }).done(function(result) {
            addTweet(tweet);
            clearTweet();
        }).fail(function(err) {
            alert(err);
        });
    }
		/*This function should create a post request using jquery. When posted it should:
			1) Add tweets to the 'database'
			2) After posted prepend message to list of messages and clear input box */


	 function getData() {
        $.ajax({
            url: '/messages'
        }).done(function(results){
            var t = results.split('\n');
            var totTweets = tweets.length == 0 ? 0 : tweets.length - 1;
            for (var i = totTweets; i < t.length; i++) {
                var tweet = JSON.parse(t[i]);
                tweets.push(tweet);
                addTweet(tweet);
            }
        });
    }
		/*This function should make a get request from 'database', parse the data and prepend each to the page*/
	function addTweet(tweet){
		var divTweets = $('.tweets');
		divTweets.prepend(createTweetDiv(tweet))
	}
	
	function createTweetDiv(tweet){
		var tdiv = $('<div class="tweet col-md-12"></div>');
		tdiv.text(tweet.userName + ':' + tweet.text)
		return tdiv;
	}
	function validateTweet() {
		if($('.text').val() === '' || 
		$('.user').val() === ''){
			return false;
		}
		return true;
	}
	function clearTweet(){
		$(".text").val('');
	}
	/*Calls function once page loaded to display tweets to page*/
	setInterval(
		getData,
		1000
	);
});