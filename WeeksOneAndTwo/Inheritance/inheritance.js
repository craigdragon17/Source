$(document).ready(function() {
	var height = $(document).height() - 100;
	var width = $(document).width() - 100;
	
	$('#btnAddCopCar').click(function(){
		var v = new CopCar();
		v.move();
	});
	$('#btnAddMotorcycle').click(function(){
		var m = new MotorCycle();
		m.move();
	});
	$('#btnAddCar').click(function(){
		var c = new Car();
		c.move();
	});
	$('#btnAddTank').click(function(){
		var t = new Tank();
		t.move();
	});



vehicle.prototype.createVehicle = function(vehicleType) {
	console.log('inside create vehicle');
	console.log('vehicle type: ' + vehicleType);
	this.div = $('<div class="' + vehicleType +'"></div>');
	$(document.body).append(this.div);
}

vehicle.prototype.moveRight = function () {
	$(this.div).animate({
		left: width},
		{duration: this.speed, queue:false, complete:this.moveLeft.bind(this)}
		
	);
};
vehicle.prototype.moveLeft = function() {
	$(this.div).animate({
		left:0},
		{duration: this.speed, queue:false, complete: this.moveRight.bind(this)}
	);
}
vehicle.prototype.moveUp = function() {
	$(this.div).animate({
		top: 0},
		{duration: this.speed,
			queue:false,
			complete: this.moveDown.bind(this)}
			);
}
vehicle.prototype.moveDown = function () {
	$(this.div).animate({
		top: height}, 
		{duration: this.speed,
		queue: false,
		complete: this.moveUp.bind(this)}
	);
}
vehicle.prototype.move = function (direction) {
	this.moveRight();
	this.moveDown();
}
//vehicle.prototype.remove = function (crash) {//
	
//}//
function vehicle(vehicleType) {
	this.createVehicle('vehicle');
	this.damage = 1;
	this.speed = 2000;
}
function Car () {
	this.createVehicle('Car');
	this.damage = 5;
	this.speed = 500 ;
	this.move = function () {
		this.moveRight();
	}
}

Car.prototype = Object.create(vehicle.prototype);

function CopCar () {
	this.createVehicle('copCar');
	this.damage = 3;
	this.speed = 500;
	this.move = function () {
		this.moveDown();
	}
}
CopCar.prototype = Object.create(vehicle.prototype);

function MotorCycle () {
	this.createVehicle('motorCycle');
	this.damage = 1;
	this.speed = 500;
	
}
MotorCycle.prototype = Object.create(vehicle.prototype);

function Tank () {
	this.createVehicle('Tank');
	this.damage = 10;
	this.speed = 250;
}
Tank.prototype = Object.create(vehicle.prototype);
})