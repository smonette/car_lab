// require('locus');


function Car(make, model, year, color){
  this.make = make;
  this.model = model
  this.year = year;
  this.color = color;
  this.state = "off"
  this.previousOwners = [];
  this.passangers = [];
  this.currentOwner = "manufacturer";
}

Car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner);
	this.currentOwner = newOwner;
};
Car.prototype.paint = function(newColor){
	this.color = newColor;
};
Car.prototype.start = function(){
	this.state = "on";
};
Car.prototype.off = function(){
	this.state = "off";
};
Car.prototype.driveTo = function(destination){
	console.log("Driving to " + destination);
};
Car.prototype.park = function(){
	if(this.state === "off"){
		console.log("Parked!");
	} 
};
Car.prototype.pickup = function(name){
	if(this.state === "on"){
		console.log("Driving to pick up " + name);
		this.passangers.push(name);
	}
};
Car.prototype.dropoff = function(name){
	
	for(i=0; i<this.passangers.length; i++){
		if((this.state === "on") && (name === i)){
			console.log("Dropping off " + name);
			this.passangers.splice(i,1);
		}
	}
};


// Create some cars
var myCar = new Car("Honda", "Fit", "2011", "lt-blue");

// Create my old car, and set ownership
var myOldCar = new Car("Chrysler", "PT Cruiser", "2005", "dk-blue");
myOldCar.previousOwners = ["manufacturer", "Bob Jones", "Steph Monette"];
myOldCar.currentOwner = "Santa Ana Honda";






// Maunal Tests for the functions

// myCar.sale('Steph Monette');
// myOldCar.paint('magenta');
// myCar.start();
// myCar.driveTo("San Luis Obispo.");
// myCar.park();
// myOldCar.park();
// myCar.pickup('Amy');
// myOldCar.pickup('Tofu');
// myCar.dropoff('Amy');


module.exports = Car;





// eval(locus);

