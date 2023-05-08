// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 5));

//Arrow function syntax
const add = (a, b) => {
  return a + b;
};

//Implicit return

const sub = (a, b) => a - b;

//Can leave off () with asingle param
const double = (a) => a * 2;

//Returning an object
const createObj = () => ({
  name: "brad",
});

console.log(add(2, 7));
console.log(sub(10, 2));
console.log(double(5));
console.log(createObj());

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

//Arrow function in a callback
numbers.forEach((n) => console.log(n));
