//Loop over Array

const items = ["book", "chair", "table", "kite"];
const users = [{ name: "brad" }, { name: "kate" }, { name: "linda" }];

for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user);
}

// Loop over strings
const str = "Hello World";

for (const letter of str) {
  console.log(letter);
}

//Loop over Maps
const map = new Map();
map.set("name", "John");
map.set("age", 30);

for (const [key, value] of map) {
  console.log(key, value);
}
