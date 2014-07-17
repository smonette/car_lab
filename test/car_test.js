var expect = require("chai").expect;
var Car = require("../src/car.js");

describe("Car", function(){
	console.log("The test file is loading");
	
	// it("Car equals Car", function(){
	// 	expect(Car).to.eql(Car);
	// })

	beforeEach(function(){
		newCar = new Car("dodge", "caravan", "1995", "green");
	})

	describe("hasDefaults", function(){
		it("previous owners should be empty array", function(){
			expect(newCar.previousOwners).to.eql([]);
		})
	})



})