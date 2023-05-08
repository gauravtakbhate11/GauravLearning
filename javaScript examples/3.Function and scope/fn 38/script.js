// var is a function scope not block scope

if (true) {
  var y = 200;
}
console.log(y);

for (var i = 0; i <= 10; i++) {
  console.log(i);
}
console.log(i);

// var i function scoped

function run() {
  var d = 101;
  console.log(d);
}
run();

// console.log(d);// error

// when we create a global variable with varit gets addet to window object
