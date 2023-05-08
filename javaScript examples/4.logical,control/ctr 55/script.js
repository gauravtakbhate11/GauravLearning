const age = 19;

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can not vote");
}

age >= 18 ? console.log("you can vote") : console.log("you can not vote");

//Assigning a conditional value to avariable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? "yup you can vote" : "you cannot vote";

console.log(canVote2);

const auth = true;
// let redirect;

// if (auth) {
//   alert("Welcome to the dashboard");
//   redirect = "/dashboard";
// } else {
//   alert("Access denied");
//   redirect = "/login";
// }

// const redirect = auth
//   ? (alert("Welcme to the dashboard"), "/dashboard")
//   : (alert("Acess denied"), "/login");

// console.log(redirect);

// auth ? console.log("Welcome to the dashboard") : null;

auth && console.log("Welcome to the dashboard");
