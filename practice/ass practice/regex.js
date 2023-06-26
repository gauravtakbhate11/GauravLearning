//Regular Expression that matches any word that starts with a capital letter.
let str = "the Great gaurav Is not availabl to Play Cricket at this time.";
function findCapitalWords(str) {
  const regex = /[A-Z]\w+/g;
  const capitalWords = str.match(regex);
  return capitalWords;
}
let ans = findCapitalWords(str);
console.log(ans);

//Regex for any string that contains the word "apple" followed by one or more digits.
let string = "apple apple12 apple1324 apple1 gaurav";
function findApplePlusDigit(str) {
  const regex = /apple[0-9]+/g;
  const apple = str.match(regex);
  return apple;
}
let answer = findApplePlusDigit(string);
console.log(answer);

//Regex for https:// and http://
let string2 = "https://google http://hhatau";
function findurl(str) {
  const regex = /(https|http):[/][/]\w+/g;
  const url = str.match(regex);
  return url;
}
let answer2 = findurl(string2);
console.log(answer2);

//Regex to replace c/C to Cache
let string3 = "c C CCC ccc c ";
const reg = /c|C/g;
function replaceC(str) {
  let replaced = str.replace(reg, "cache");
  return replaced;
}
let answer3 = replaceC(string3);
console.log(answer3);
