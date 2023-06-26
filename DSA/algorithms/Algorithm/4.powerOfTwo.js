function powerOfTwo(n) {
  return !(n & (n - 1));
}

console.log(powerOfTwo(16));
