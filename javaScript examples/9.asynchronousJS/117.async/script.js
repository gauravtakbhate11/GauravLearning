const content = document.querySelector("#content");
const btn = document.querySelector("button");

function getJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        content.innerHTML = `<h1>${JSON.parse(this.responseText).value}</h1>`;
      } else {
        content.innerHTML = `<h1>Something went wrong (NOT FUNNY) </h1>`;
      }
    }
  };
  xhr.send();
}

btn.addEventListener("click", getJoke);
document.addEventListener("DOMContentLoaded", getJoke);
