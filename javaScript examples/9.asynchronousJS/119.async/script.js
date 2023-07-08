const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task complete");
    resolve();
  }, 1000);
});

// promise.then(() => {
//   console.log("Promise is consumed..");
// });

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({
        name: "brad",
        age: 20,
      });
    } else {
      reject("Something Went Wrong");
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log("task is resolved or rejected"));

console.log("Hello from global scope");
