function removeClearBtn() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

function removeFirstChild() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}

function removeItem(itemIndex) {
  const list = document.querySelectorAll("li");

  list.forEach((item, index) => {
    if (index + 1 === itemIndex) {
      item.remove();
    }
  });
}

function removeItem2(itemIndex) {
  const ul = document.querySelector("ul");
  const li = document.querySelectorAll("li")[itemIndex - 1];

  ul.removeChild(li);
}

function removeItem3(itemIndex) {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child(${itemIndex})`);

  ul.removeChild(li);
}

// removeClearBtn();
// removeFirstChild();
// removeItem(3);
// removeItem2(2)
removeItem3(1);
