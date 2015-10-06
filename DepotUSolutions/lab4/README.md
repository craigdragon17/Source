### Instructions
There are serveral supporting frameworks to interact act with the [DOM](https://en.wikipedia.org/wiki/Document_Object_Model). However, the same effects can be achieved in pure javascript.This project will be constructed without writing any addtional HTML. With the HTML skeleton provided, create a simple webpage with a button at the top which adds squares to the page.

#### Further Reading
A great place to start looking for ways to interact with the [DOM is MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document).


### Basic Req's

* Only when the browser first loads should the button be created.
* When the button is clicked, a new `div` should be added to the page
	* The `div` should be a black square
	* All `divs` should have a single classname
	* It shoud have an id with a numerical value equivalent to the number of squares are in the DOM Tree before being added
	* The `div` should not have any text when created
* When hovering over a square element - the element's id should display in the center and disappear when the cursor isn't over it
* When the square is clicked, it should change to a random color
* When a square is double click:
	*If it is even, the following element should be removed
	*If odd, the previous element should be removed
	*If there is no folowing or previous element, alert the element does not exist
