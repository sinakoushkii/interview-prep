// constructor function 
// In the code below the showPersonInfo function will be created for every instance of the object.
function Person(name,age){
    this.name = name;
    this.age = age;

    this.showPersonInfo = function(){
        console.log(`This is ${this.name} and he is ${this.age} years old`);
    }
}


// Here we create a prototype function(showCarInfo) for the Person object.
// This way the function will be created only once and shared between all the instances of the object.
function Car(brand, year){
    this.brand = brand;
    this.year = year;    
}

Car.prototype.showCarInfo = function(){
    console.log(`This is a ${this.year} ${this.brand} ${this.model}`);
}

const person1 = new Person('John', 25);
const person2 = new Person('Sara', 30);

const car1= new Car('Toyota', 2019);
const car2= new Car('Honda', 2018);


// class is syntactic sugar for constructor function
class Laptop{
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }

    showLaptopInfo(){
        console.log(`This is a ${this.brand} laptop and worth ${this.price}`);
    }
}

const laptop1 = new Laptop('Dell', 1000);
const laptop2 = new Laptop('HP', 800);

console.log(laptop1)
console.log(laptop2)