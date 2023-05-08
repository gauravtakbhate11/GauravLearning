const getCelcius = (f) => String((f - 32) * (5 / 9)) + "\xB0C";
console.log(getCelcius(98));

const minMax = (arr) => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return {
    min: min,
    max: max,
  };
};
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(minMax(arr));

(function (length, width) {
  let area = length * width;
  console.log(
    `the area od rectangke wiith width ${width} and length ${length} is ${area}`
  );
})(5, 6);
