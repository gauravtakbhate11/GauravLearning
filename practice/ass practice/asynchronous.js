//setTimeout
setTimeout(() => {
  console.log("step 1");
}, 10000);

//setInterval
setInterval(() => {
  console.log("hi");
}, 2000);

//callbacks and promises
function call_1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step 1");
      resolve();
    }, 3000);
  });
}

function call_2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step 2");
      reject();
    }, 2000);
  });
}
function call_3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step 3");
      resolve();
    }, 1000);
  });
}
function call_4() {
  setTimeout(() => {
    console.log("step 4");
  }, 000);
}

call_1()
  .then(call_2)
  .then(call_3)
  .then(call_4)
  .catch((err) => {
    console.log("error caught");
  })
  .finally(() => {
    console.log("test done");
  });

//Async and Await
async function authenticate() {
  try {
    await call_1();
    await call_2();
    await call_3();
    await call_4();
  } catch (err) {
    console.log("err");
  }
}

authenticate();

function greet() {
  console.log("Hello world");
}

setInterval(greet, 1000);
