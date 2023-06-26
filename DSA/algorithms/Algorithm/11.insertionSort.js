function insertionSort(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];

      j--;
    }
    arr[j + 1] = numberToInsert;
  }
}
let array = [-6, 15, 20, 8, 4, -2, -3];
insertionSort(array);
console.log(array);
