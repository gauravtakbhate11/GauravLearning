function bubbleSort(arr) {
  let flag;

  do {
    flag = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp;
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        flag = 1;
      }
    }
  } while (flag == 1);
}

let array = [-6, 5, -2, 4, 1, -1, 15, -8, -33, 3, 12];
bubbleSort(array);
console.log(array);
