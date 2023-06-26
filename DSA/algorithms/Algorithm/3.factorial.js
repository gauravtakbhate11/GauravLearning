function factorial(n) {
  let ans = 1;
  if (n < 2) {
    return 1;
  } else {
    for (let i = 2; i <= n; i++) {
      ans = ans * i;
    }
    return ans;
  }
}

console.log(factorial(3));
