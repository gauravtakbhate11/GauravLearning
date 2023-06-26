const logo = document.querySelector("img");

const onSingleClick = () => console.log("single click");

const onDoublClick = () => {
  if (document.body.style.background !== "purple") {
    document.body.style.background = "purple";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
};

const onRightClick = () => console.log("on Right Click");
const onMousedown = () => console.log("m down");
const onMouseup = () => console.log("m up");
const onWheel = () => console.log("wheel");

const onMouseOver = () => console.log("over");
const onMouseOut = () => console.log("out");

const onDragStart = () => console.log("drag start");
const onDrag = () => console.log("drag");
const onDragEnd = () => console.log("drag end");

logo.addEventListener("click", onSingleClick);
logo.addEventListener("dblclick", onDoublClick);
logo.addEventListener("contextmenu", onRightClick);
logo.addEventListener("mousedown", onMousedown);
logo.addEventListener("mouseup", onMouseup);
logo.addEventListener("wheel", onWheel);

logo.addEventListener("mouseover", onMouseOver);
logo.addEventListener("mouseout", onMouseOut);

logo.addEventListener("dragstart", onDragStart);
logo.addEventListener("drag", onDrag);
logo.addEventListener("dragend", onDragEnd);
