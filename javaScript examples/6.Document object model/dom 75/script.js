let div = document.createElement("div");
div.id = "hello";
div.className = "hell";
div.setAttribute("style", "color:blue");

let text = document.createTextNode("Hello World");

div.appendChild(text);

document.querySelector("ul").appendChild(div);
