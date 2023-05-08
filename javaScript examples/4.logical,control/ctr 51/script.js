const calculator = (num1, num2, opr) => {
  let ans = 0;
  switch (opr) {
    case "+":
      ans = num1 + num2;
      break;
    case "-":
      ans = num1 - num2;
      break;
    case "*":
      ans = num1 * num2;
      break;
    case "/":
      ans = num1 / num2;
      break;
  }

  return ans;
};

console.log(calculator(8, 3, "*"));
