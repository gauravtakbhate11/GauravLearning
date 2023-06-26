//Pure Functions add | multiply | devide

//add
function add(a, b) {
  return a + b;
}
//multiply
function multiply(a, b) {
  return a * b;
}
//devide
function devide(a, b) {
  return a / b;
}

console.log(add(5, 3) + " " + multiply(5, 3) + " " + devide(5, 3));

//function as first class objects

function greet(name) {
  console.log("hello " + name);
}
let sayHello = greet;
sayHello("gaurav");

//Higher order function
let repeat = function (takeF, number, name) {
  let i = 0;
  while (i < number) {
    takeF(name);
    i++;
  }
};

repeat(sayHello, 3, "mahi");

//Composite function
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);
const addOne = (x) => x + 1;
const double = (x) => x * 2;
const tripple = (x) => x * 3;

// composition function
var output_final = compose(tripple, double, addOne)(2);
console.log(output_final);

//Immutability in JavaScript
let fruits = ["apple", "banana", "orange"];
fruits.push("pear");
let fruitCopy = fruits.slice(0);
fruits.splice(1, 1);

console.log(fruits);
console.log(fruitCopy);

//Declarative and Imperative code
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squares = [];
for (let i = 0; i < numbers.length; i++) {
  squares.push(numbers[i] * numbers[i]);
}
console.log(squares);

let cubes = numbers.map((x) => x * x * x);
console.log(cubes);
