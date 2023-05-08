const d = new Date(2022, 2, 10, 19, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (true) {
  case month <= 1:
    console.log("jan");
    break;
  case month <= 2:
    console.log("feb");
    break;
  default:
    console.log("NOT jan or feb");
}
