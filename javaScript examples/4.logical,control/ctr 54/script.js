// ||- assigns the right side value only if the left side is falsy value

let a = false;

// if (!a) {
//   a = 10;
// }

// a = a && 10;

a ||= 10;

console.log(a);

// &&- assigns the right side value only if the left side value is truthy value
let b = 10;

// if (b) {
//   b = 20;
// }

// b = b && 30;

b &&= 40;

console.log(b);
// ??- assighns the right side value only if the left is null or undefined
let c = null;

// if (c === null || c === undefined) {
//   c = 50;
// }

// c = c ?? 60;

c ??= 70;

console.log(c);
