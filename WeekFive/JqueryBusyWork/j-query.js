$(document).ready(function() {
	
//1. Make a button that displays an alert when clicked using jQuery.
$('#keystone').click(function(){
	alert("You found an odd keystone!!")
});
//2. Make a button and text box. When the button is clicked,
// display an alert with the message that is typed in the text box using jQuery.
$('#btnclick').click(function() {
	var steek = $('#textbox').val();
	alert(steek);
});
//3. Create a div in HTML then add JavaScript to make it change colors whenever your mouse hovers over the div.
//The div should return to it's original color when the mouse exits the div using jQuery.
 $('#walter').hover(function(){
	 console.log('dude!!');
	 $(this).addClass("hover");
 },
 	function() {
		 $(this).removeClass("hover");
	 });
 
//4. Put some text in a paragraph. Make it where when you click on the paragraph text, the color of the text switches to red.
//Once complete, try making it switch to a random color each click using jQuery.
$('#onASteek').click(function(){
	$(this).css("color",
	 Math.floor(Math.random()*256).toString(16) +
	 Math.floor(Math.random()*256).toString(16) +
	 Math.floor(Math.random()*256).toString(16));
});

//5. Add a span that says your name in it to an empty div using jQuery.
 	$('#jose').click(function(){
		 console.log('Dude!!');
		 $("#peanut").append($('#yourMom').val());
		 console.log('Hello after append');
	 });

//6.Create a <ul> in HTML. From JavaScript add an <li> for items in an array that you create using jQuery.
var puppets = ['Peanut', 'Walter', 'Bubba J', 'Jose Jalapeno on a Steek']
var plist = $('ul.cast');
$.each(puppets, function(i){
	var li = $('<li/>').appendTo(plist);
	var a = $("<a/>").text(this).appendTo(li);
	});
});