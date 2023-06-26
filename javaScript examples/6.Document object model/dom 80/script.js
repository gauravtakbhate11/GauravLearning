function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "Replaced first";

  firstItem.replaceWith(li);
}

function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");

  secondItem.outerHTML = "<li>Replaced Second</li>";
}

// function replaceAll() {
//   const list = document.querySelectorAll("li");

//   list.forEach((item, index) => {
//     // item.outerHTML = "<li>Replaced All</li>";
//     if (index === 1) {
//       item.innerHTML = "Second Item";
//     } else {
//       item.innerHTML = "Replaced All";
//     }
//   });
// }

function replaceAll() {
  const list = document.querySelectorAll("li");
  list.forEach((item, index) =>
    index === 1
      ? (item.outerHTML = "<li>Second ITEM</li>")
      : (item.outerHTML = "<li>ITEM</li>")
  );
}

function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("h1");

  const h2 = document.createElement("h2");
  h2.className = "newHeading";
  h2.textContent = "ShoppingList";

  header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAll();
replaceChildHeading();
