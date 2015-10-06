var Animal = function() {
	
}
Animal.prototype.move = function(distance) {
	
}
var Snake = function(lethal) {
	this.isLethal = lethal;
}
Snake.prototype = Animal.prototype;

var Horse = function() {
	
}

Horse.prototype = Animal.prototype;
var RattleSnake = new Snake(true);
console.log(RattleSnake.isLethal);

console.log(RattleSnake instanceof Snake );
console.log(RattleSnake instanceof Animal);
console.log(RattleSnake instanceof Function);
console.log(RattleSnake instanceof Object);
console.log(RattleSnake instanceof Horse);