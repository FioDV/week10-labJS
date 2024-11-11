// Constructor function for Car
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

// 'accelerate' and 'brake' methods
Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// Constructor function for Electric Car (EV)
function EV(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

// Inherit the methods from Car prototype
EV.prototype = Object.create(Car.prototype);


EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} charged to ${this.charge}%`);
};


EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

// Electric car object
const electric1 = new EV('Tesla', 120, 23);


electric1.accelerate();
electric1.brake();
electric1.chargeBattery(90);
electric1.accelerate();