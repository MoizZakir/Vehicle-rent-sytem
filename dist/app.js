"use strict";
// Rental system
class Vehcile {
    constructor(Make, Model, Year, Rented) {
        this.make = Make;
        this.model = Model;
        this.year = Year;
        this.rented = Rented;
    }
    get Make() {
        return this.make;
    }
    set Make(value) {
        this.make = value;
    }
    get Model() {
        return this.model;
    }
    set Model(value) {
        this.model = value;
    }
    get Year() {
        return this.year;
    }
    set Year(value) {
        this.year = value;
    }
    get Rented() {
        return this.rented;
    }
    set Rented(value) {
        this.rented = value;
    }
    rent() {
        if (this.rented) {
            return "this type " + this.make + " " + this.model + ' is rented Already';
        }
        else {
            this.rented = true;
            return "Thankyou You have rented the vehcile " + this.make + " " + this.model;
        }
    }
    return() {
        if (this.rented) {
            this.rented = false;
            return "Thank you for return " + this.make + " " + this.model;
        }
        else {
            return "This vehiclie " + this.make + " " + this.model + " is not rented.";
        }
    }
}
class Car extends Vehcile {
    constructor(make, model, year, rented, seatnum) {
        super(make, model, year, rented);
        this.seatnum = seatnum;
    }
    rentalRate() {
        return 50;
    }
    Seat_num() {
        return this.seatnum;
    }
}
class Truck extends Vehcile {
    constructor(make, model, year, rented, LoadCapable) {
        super(make, model, year, rented);
        this.LoadCapable = LoadCapable;
    }
    rentalRate() {
        return 150;
    }
    load_capable() {
        return this.LoadCapable;
    }
}
class Motorcycle extends Vehcile {
    constructor(make, model, year, rented, EngineProperty) {
        super(make, model, year, rented);
        this.EngineProperty = EngineProperty;
    }
    rentalRate() {
        return 70;
    }
    Engine_property() {
        return this.EngineProperty;
    }
}
//INSTANCE FOR EACH TYPE OF VEHCILE
const car = new Car("honda", 'city', 2002, false, 4);
console.log(car.rent());
console.log(car.return());
const truck = new Truck("Isuzu", "hino", 1994, false, 5000);
console.log(truck.rent());
console.log(truck.return());
const motorcycle = new Motorcycle('Unique', 'UD 70', 2019, false, "70cc");
console.log(motorcycle.rent());
console.log(motorcycle.return());
//# sourceMappingURL=app.js.map