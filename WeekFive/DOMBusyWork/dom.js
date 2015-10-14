//1. Make a button that displays an alert when clicked using DOM.
 
function myAlert() {
	alert("You found an odd keystone");
};
var stone = document.getElementById('textAlert');

stone.onclick = myAlert;

//2. Make a button and text box. When the button is clicked,
// display an alert with the message that is typed in the text box using DOM.
function myText() {
	var box = document.getElementById('textbox');
	alert(box.value);
}

//3. Create a div in HTML then add JavaScript to make it change colors whenever your mouse hovers over the div.
//The div should return to it's original color when the mouse exits the div using DOM.
function mouseHover(e) {
	e.target.style.backgroundColor = "red";
};
function notHover(e) {
	e.target.style.backgroundColor = "blue";
};
var walt = document.getElementById('walter');
walt.onmouseover = mouseHover;
walt.onmouseout = notHover;
//4. Put some text in a paragraph. Make it where when you click on the paragraph text, the color of the text switches to red.
//Once complete, try making it switch to a random color each click using DOM.
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var steek = document.getElementById('onASteek');
steek.onclick = randomColor;
function randomColor(e) {
	console.log('Infedel')
	e.target.style.color = getRandomColor();
}
//5. Add a span that says your name in it to an empty div using DOM.
function jose() {
	var y = document.getElementById('yourMom').value;
	document.getElementById('nameHere').innerHTML = y;
}

//6.Create a <ul> in HTML. From JavaScript add an <li> for items in an array that you create using DOM.
var arr = ['Walter', 'Sweet Daddy', 'Bubba J', 'Achmed', 'Peanut', 'Jose Jalapino on a Steek'];
for (var i = 0; i < arr.length; i++) {
	var fire = document.createElement('LI');
	var ice = document.createTextNode(arr[i]);
	fire.appendChild(ice);
	document.getElementById("mylist").appendChild(fire);
};