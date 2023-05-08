const email = "test@test.com";

if (email) {
  console.log("You passed an email");
}

console.log(Boolean(email));

//6 falsy values
//false
//0
//'' or ""
//undefined
//null
//NaN

//Truthy values
//everything esle
//true
//'0'
//' '
//'false'
//[]
//{}
//function(){}

let x = true;

if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

//truthy falsy caveats

const children = 0;

if (!isNaN(children)) {
  console.log(`you have ${children} children`);
} else {
  console.log("please enter children");
}

if (children !== undefined) {
  console.log(`you have ${children} children`);
} else {
  console.log("please enter children");
}

const post = [];

if (post.length > 0) {
  console.log("List Post");
} else {
  console.log("No Post");
}

const user = {
  name: "Brad",
};

console.log(Object.keys(user));

if (Object.keys(user).length > 0) {
  console.log("List user");
} else {
  console.log("No user");
}

console.log(false === 0);
console.log("" === 0);
console.log(null === undefined);
