const inputField = document.getElementById("item-input");

function onKeyPress(e) {
  console.log("key pressed");
}

function onKeyUp(e) {
  console.log("key up");
}

function onKeyDown(e) {
  // console.log(e.key);

  // document.querySelector("h1").innerText = e.key;

  //key
  if (e.key === "Enter") {
    alert("You pressed Enter");
  }

  //keyCode
  if (e.keyCode === 13) {
    alert("You pressed Enter");
  }

  //code
  if (e.code === "Digit1") {
    alert("You pressed 1");
  }

  //e.repeat
  if (e.repeat) {
    console.log("You are holding down " + e.key);
  }

  console.log("shift : " + e.shiftKey);
  console.log("ctrl : " + e.ctrlKey);
  console.log("alt : " + e.altKey);

  if (e.shiftKey && e.key === "K") {
    console.log("You hit shift + k");
  }
}

// inputField.addEventListener("keypress", onKeyPress);
inputField.addEventListener("keydown", onKeyDown);
// inputField.addEventListener("keyup", onKeyUp);
