function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArr, rightArr) {
  const sortArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortArr.push(leftArr.shift());
    } else {
      sortArr.push(rightArr.shift());
    }
  }
  return [...sortArr, ...leftArr, ...rightArr];
}

let arr = [-6, 8, -2, 10, 14, -3];
console.log(mergeSort(arr));
