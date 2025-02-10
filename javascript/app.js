// constructor function
// In the code below the showPersonInfo function will be created for every instance of the object.
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.showPersonInfo = function () {
    console.log(`This is ${this.name} and he is ${this.age} years old`);
  };
}

// Here we create a prototype function(showCarInfo) for the Person object.
// This way the function will be created only once and shared between all the instances of the object.
// This is called Prototype Design Pattern
function Car(brand, year) {
  this.brand = brand;
  this.year = year;
}

Car.prototype.showCarInfo = function () {
  console.log(`This is a ${this.year} ${this.brand} ${this.model}`);
};

const person1 = new Person("John", 25);
const person2 = new Person("Sara", 30);

const car1 = new Car("Toyota", 2019);
const car2 = new Car("Honda", 2018);

// class is syntactic sugar for constructor function
class Laptop {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  showLaptopInfo() {
    console.log(`This is a ${this.brand} laptop and worth ${this.price}`);
  }
}

const laptop1 = new Laptop("Dell", 1000);
const laptop2 = new Laptop("HP", 800);

console.log(laptop1);
console.log(laptop2);

const getName = () => {
  console.log("Hello World");
};

// rest parameter
// used to represent an indefinite number of arguments as an array and when function declaration
const sum = (...args) => {
  let total = 0;
  args.forEach((arg) => {
    total += arg;
  });
  return total;
};

const result = sum(10, 30, 100, 20);

// spread operator
// used to split up array elements or object properties and when function call
const codes = [101, 202, 303, 404];
newcodes = [...codes, 505, 606, 707];

let fourNumbers = [5, 6, 7, 8];

function addFourNumbers(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}

const finallResult = addFourNumbers(...fourNumbers);

// promise
const promise = new Promise((resolve, reject) => {
  const status = true;
  if (status) {
    setTimeout(() => {
      resolve({
        status: 200,
        message: "Data has been fetched",
        data: [1, 2, 3, 4, 5],
      });
    }, 2000);
  } else {
    reject("Error, something went wrong");
  }
});

promise
  .then((respose) => console.log(respose))
  .catch((error) => console.log(error));

// async await
async function fetchData() {
  try {
    const response = await promise;
    console.log({ type: "async await", response });
  } catch (error) {
    console.log(error);
  }
}
fetchData();

// generator function
// used to pause and resume the function execution
function* generatorFunction() {
  for (let i = 0; i <= 2; i++) {
    yield i;
  }
  return "Function Done !";
}

let generator = generatorFunction();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// array methods
let arrayIntegersOriginal1 = [10, 20, 30, 40, 50];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5, 6, 7, 8];

let modifiedArray = arrayIntegersOriginal1.slice(3, 5);
console.log(modifiedArray);

removedElements = arrayIntegersOriginal2.splice(1,3,20,30,40);
console.log(removedElements)
console.log(arrayIntegersOriginal2)

let addedElements=arrayIntegersOriginal2.splice(0,0,100,200,300)
console.log(arrayIntegersOriginal2)
console.log(addedElements)