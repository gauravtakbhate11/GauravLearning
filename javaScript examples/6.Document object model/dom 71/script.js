console.log(document.getElementById("heading").getAttribute("class"));
console.log(document.getElementById("heading").getAttribute("class"));
document.getElementById("heading").setAttribute("style", "color:green");
let title = document.getElementById("heading");
title.style.backgroundColor = "pink";
title.style.borderRadius = "20px";

let output = document.querySelector("li:nth-child(2)").innerText;

document.getElementById("heading").className = "head1";
console.log(output);
