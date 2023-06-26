function searchNumberIndex(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
}

console.log(searchNumberIndex([1, 2, 5, 8, 13], 32));
