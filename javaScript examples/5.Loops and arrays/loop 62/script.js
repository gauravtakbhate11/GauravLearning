const colorObj = {
  color1: "red",
  color2: "blue",
  color3: "orange",
  color4: "green",
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const arr = ["red", "blue", "orange", "green"];

for (const key in arr) {
  console.log(key, arr[key]);
}
