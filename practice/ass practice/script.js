function capitalizeWords(str) {
  let str1 = str.split(" ");
  let slicedStr1 = [];

  let newStr = [];

  for (let i = 0; i < str1.length; i++) {
    slicedStr1.push(str1[i].slice(1));
    newStr.push(str1[i].charAt(0).toUpperCase());
    newStr[i] = newStr[i] + slicedStr1[i];
  }

  newStr = newStr.join();
  return newStr;
}

console.log(capitalizeWords("hello world"));
