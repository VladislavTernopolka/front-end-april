// function ElectronDevice() {
// 	var enableed = false;

// 	this.enable = function() {
// 		enable = true;
// 	};

// 	this.disable = function() {
// 		enabled = false;
// 	};
// }

// function Macbook(battery) {
// 	ElectronDevice.call(this);

// 	var ram = 4;
// }

// var some = new ElectronDevice();

// console.log(some);

// var animal = {
// 	eats: true
// };
// var rabbit = {
// 	jumps: true
// };

// rabbit.__proto__ = animal;

// console.log(rabbit);

// function Animal (name) {
// 	this.name = name;
// 	this.speed = 0;
// };

// Animal.prototype.run = function(speed) {
// 	this.speed += speed;
// 	console.log();
// };

// Animal.prototype.stop = function() {
// 	this.speed = 0;
	
// };

// var animal = new Animal ('Зверь');
// console.log(animal);

// function User() {
// var FirstName;
// var Surname;

// 	this.setFirstName = function(name) {
// 	FirstName = name;
// 	};

// 	this.setSurname = function(surname) {
// 	Surname = surname;
// 	};

// 	this.getFullName = function () {
// 		return FirstName  + Surname;
// 	};

// };

// var user = new User();
// user.setFirstName('Петя');
// user.setSurname('Иванов');

// console.log(user.getFullName());


function Machine() {
	this._enabled = false;

	this.enable = function() {
		this._enabled = true;
	};

	this.disable = function() {
		this._enabled = false;
	};
}

function CoffeMachine(power) {
	Machine.apply(this, arguments);

	var waterAmount = 0;

	this.setWaterAmount = function(amount) {
		waterAmount = amount;
	};

	function onReady() {
		console.log ('Coffe is allready');
	} 

	this.run = function() {
		if (!this._enabled) return 
		setTimeout(onReady, 1000);
	};
}

var CoffeMachine = new CoffeMachine(10000);
CoffeMachine.enable();
CoffeMachine.run();
console.log(CoffeMachine)


