const express = require("express");
const app = express();
const port = 3000;

function calculateSum(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }
  return sum;
}

// app.get("/handle", (req, res) => {
//   let counter = req.query.counter;
//   let calculation = calculateSum(counter);
//   let ans = `the sum is ${calculation}`;
//   res.send(ans);
// });

app.post("/handle", (req, res) => {
  let counter = req.query.counter;
  let calculation = calculateSum(counter);
  let ans = `the sum is ${calculation}`;
  res.send(ans);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
