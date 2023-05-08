const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum2);

const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc = acc + cur;
  }
  return acc;
};

console.log(sum3());

const cart = [
  { id: 1, name: "Product1", price: 130 },
  { id: 2, name: "Product2", price: 150 },
  { id: 3, name: "Product3", price: 200 },
];

const total = cart.reduce(
  (accumulator, product) => accumulator + product.price,
  0
);

console.log(total);
