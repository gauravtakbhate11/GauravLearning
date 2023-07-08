// setTimeout(() => {
//     console.log('hello from setTimout');
// }, 0);

function changeText() {
  document.querySelector("h1").textContent = "hello from callback";
}

let timeID = setTimeout(changeText, 2000);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log(timeID);
  clearTimeout(timeID);
  console.log("timer cancelled");
});
