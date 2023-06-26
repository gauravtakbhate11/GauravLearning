function starry(n) {
  for (let i = 0; i <= n; i++) {
    let str = space(n) + "";
    for (let j = 0; j <= i; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}

function space(n) {
  let str = "";
  for (let i = 0; i <= n; i++) {
    str = str + " ";
  }
  return str;
}

starry(5);
