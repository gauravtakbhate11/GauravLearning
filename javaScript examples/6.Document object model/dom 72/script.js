const item = document.querySelectorAll("li");

console.log(item[1].innerText);

item.forEach((item, index) => {
  item.style.color = "red";
  
  item.innerText=index
});
