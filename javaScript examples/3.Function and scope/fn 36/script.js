//Default parameters
function registerUser(user = "Bot") {
  //   if(!user){
  // user='Bot'
  // }

  return user + " is registered";
}

console.log(registerUser());

//Rest parameters
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 100));

//Objects as parameters
function loginUser(user) {
  [user.id];
  return `the user ${user.name} with id of ${user.id} is logged in`;
}

const user1 = {
  name: "gaurav",
  id: 2,
};

console.log(loginUser(user1));

console.log(
  loginUser({
    name: "john",
    id: 5,
  })
);
//Arrays as parameters
function getRandom(arr) {
  randomIndex = Math.floor(Math.random() * arr.length);
  item = arr[randomIndex];
  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 500, 600, 700, 8, 9, 10]);
