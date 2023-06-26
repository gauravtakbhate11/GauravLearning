const form = document.getElementById("item-form");

function onSubmit(e) {
  e.preventDefault();

  input = document.getElementById("item-input").value;
  priority = document.getElementById("priority-input").value;

  if (input === "" || priority === "0") {
    alert("fill All the fields");
    return;
  }

  console.log(input, priority);
}

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  // const item = formData.get("item");
  // const priority = formData.get("priority");

  const entries = formData.entries();
  // console.log(entries);

  for(let entry of entries ){
    console.log(entry[0]);
  }

  // console.log(item, priority);
}

// form.addEventListener("submit", onSubmit);
form.addEventListener("submit", onSubmit2);
