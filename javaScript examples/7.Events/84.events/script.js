function onClear() {
  const itemList = document.querySelector("ul");
  const items = document.querySelectorAll("li");

  // itemList.innerHTML = "";

  // items.forEach((item,index) => {
  //   if (index !== 0) {
  //     item.remove();
  //   }
  // });

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

const clearBtn = document.querySelector("#clear");

// clearBtn.onclick = function () {
//   alert("cleared");
// };
// clearBtn.onclick = function () {
//   console.log(("cleared"));
// };

// clearBtn.addEventListener("click", function () {
//   alert("hello from new method");
// });

clearBtn.addEventListener("click", onClear);

// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);
