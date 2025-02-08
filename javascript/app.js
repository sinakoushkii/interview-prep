function Person(name,age){
    this.name = name;
    this.age = age;

    this.showPersonInfo = function(){
        console.log(`This is ${this.name} and he is ${this.age} years old`);
    }
}

const person1 = new Person('John', 25);
person1.showPersonInfo();