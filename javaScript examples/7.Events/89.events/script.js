const input = document.getElementById("item-input");
const slectList = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const h1 = document.querySelector("h1");

function onInput(e) {
  h1.textContent = e.target.value;
}

function onChecked(e) {
  const isChecked = e.target.checked;
  h1.textContent = isChecked === true ? "checked" : "not checked";
}

function onFocus() {
  console.log("focused");
  input.style.outlineColor='red'
  input.style.outlineWidth='1px'
  input.style.outlineStyle='solid'

}

function onBlurr() {
  console.log("blurred");
  input.style.outlineStyle='none'
}
input.addEventListener("input", onInput);
slectList.addEventListener("input", onInput);
checkbox.addEventListener("input", onChecked);
input.addEventListener("focus", onFocus);
input.addEventListener("blur", onBlurr);
