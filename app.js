// Part 1
class Vehicle{
    constructor(a,b,c){
        this.make = a;
        this.model = b;
        this.year = c;
    }
    honk(){
        console.log('Beep');
    }
    toString(){
        console.log(`This vehicle is a ${this.make} ${this.model} from ${this.year}.`);
    }
}

// Part 2
class Car extends Vehicle{
    constructor(a,b,c){
        super (a,b,c);
        this.numberWheels = 4;

   }
}

// part 3
class Motorcycle extends Car{
    constructor(a,b,c){
        super (a,b,c);
        this.numberWheels = 2;

   }
revEngine(){
    return "VROOM!!!";
}
}

// Part 4
class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(newVehicals){
       if(!(newVehicals instanceof Vehicle)){
        return "Only vehicles are allowed in here!";
       }
       if(this.vehicles.length >= this.capacity){
        return "Sorry, we're full.";
       }
       this.vehicles.push(newVehicals);
       return "Vehicle added";
    }

}
