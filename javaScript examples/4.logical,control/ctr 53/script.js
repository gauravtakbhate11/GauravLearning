console.log(10 < 20 && 30 > 10 && 40 < 60);
console.log(10 < 20 || 30 < 15);

// && - Will return first falsy value or last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;

console.log(a);

const post = [];
post.length > 0 && console.log(post[0]); //This is to avoid desplaying undefined on page when there is no element present in array/object

// ||- Will return the first truthy value or last value

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || "" || undefined;

console.log(b);

// ??- Will return right side operand when the left side is null or undefined

let c;

c = 10 ?? 20;
c = null ?? 20;
c = 0 ?? 30;
c = "" ?? 40;

console.log(c);
