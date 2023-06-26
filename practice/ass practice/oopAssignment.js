//Defining  a class based on colour, size, shape, weight, texture
class Product {
  constructor(colour, size, shape, weight, texture) {
    this.colour = colour;
    this.size = size;
    this.shape = shape;
    this.weight = weight;
    this.texture = texture;
  }
}

//creating a class to solve a problem and adding a method by using prototype property
class AdditionCalculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
}

let ac = new AdditionCalculator(15, 17);

AdditionCalculator.prototype.getAddition = function () {
  return this.num1 + this.num2;
};

console.log(ac.getAddition());

//Inheritance --> creating a parent class and a children class and adding properties and methods to it
class Person {
  constructor(name, age, salery) {
    this.name = name;
    this.age = age;
    this.salery = salery;
  }
  calculateTax() {
    return this.salery * 0.1;
  }
}

const gaurav = new Person("gaurav", 25, 50000);

class SubPerson extends Person {
  constructor(name, age, salery) {
    super(name, age, salery);
  }
  printName() {
    console.log(`person's name is ${this.name}`);
  }
}

const akash = new SubPerson("akash", 25, 20000);
console.log(akash.calculateTax());

//Encapsulation and Abstraction
class Student {
  constructor(name, marks) {
    let stname = name;
    this.marks = marks;
  }

  get getName() {
    return console.log(this.stname);
  }
  get getMarks() {
    return console.log(this.marks);
  }
}

const std1 = new Student("raj", 15);
std1.getMarks;
// std1.getName; //cannot access outside

//Polymorphism
class Animal {
  constructor(name) {
    this.name = name;
  }
  animalSound() {
    console.log(`Original sound`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  animalSound() {
    console.log(`Wow Wow`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  animalSound() {
    super.animalSound();
    console.log(`mew mew`);
  }
}

const a1 = new Animal("horse");
const a2 = new Dog("tom");
const a3 = new Cat("meridith");

a1.animalSound();
a2.animalSound();
a3.animalSound();
