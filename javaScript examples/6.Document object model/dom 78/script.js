//places => beforebegin,afterbegin,beforeend,afterend

//insertAdjecentElement
function insertElement() {
  const filter = document.querySelector("#filter");

  const h1 = document.createElement("h1");
  h1.textContent = "insert Adjecent Element";

  filter.insertAdjacentElement("beforebegin", h1);
}

//insertAdjecentText

function insertText() {
  const li = document.querySelector("li");

  li.insertAdjacentText("afterend", "insertAdjecentText");
}
//insertAdjecent HTML

function insertHTML() {
  const clearBtn = document.querySelector("#clear");

  clearBtn.insertAdjacentHTML("afterend", "<h2>insertAdjecentHTML<h2>");
}

//insertBefore

function insertBeforeItem() {
  const ul = document.querySelector("#item-list");

  const li = document.createElement("li");
  li.textContent = "insertBefore";

  const thirdItem = document.querySelector("li:nth-child(3)");

  ul.insertBefore(li, thirdItem);
}
insertElement();
insertText();
insertHTML();
insertBeforeItem();
