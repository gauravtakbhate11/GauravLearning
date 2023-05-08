// console.log(window);
// console.log(document)
// console.dir(window.document);

// console.log(window.document.body.innerText);
// console.log(window.document.links[0]);

// document.body.innerHTML = "<h1>Hello World</h1>";

// document.write("Hello from Js");

console.log(document.getElementById("main"));

const main = document.getElementById("main");
main.innerHTML = "<h1>Hello from main</h1>";

document.querySelector("#main h1").innerText = "Hello";
