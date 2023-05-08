// Functon Declaration
console.log(addDollarSign(100)); //used before function declairation still works bcoz of hoisting

function addDollarSign(value) {
  return "$" + value;
}

// console.log(addPlusSign(200));//shows error bcoz hoisting is not available for function expression

//Function Expression
const addPlusSign = function (value) {
  return "+" + value;
};
