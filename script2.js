// Class
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed; // speed in km/h
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    // speedUS getter - returns speed in mi/h
    get speedUS() {
        return this.speed / 1.6;
    }

    // speedUS setter - sets speed in mi/h, converting to km/h
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

// Car OBJECT
const car1 = new CarCl('Ford', 120);

// Test data
car1.accelerate();
car1.brake();

// Using the getter to get speed in mi/h
console.log(`Current speed in mi/h: ${car1.speedUS}`);

// Using the setter to set speed in mi/h
car1.speedUS = 50;
console.log(`New speed in km/h after setting to 50 mi/h: ${car1.speed} km/h`);