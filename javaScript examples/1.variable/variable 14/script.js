let amount ='100';
//convert string to number
// amount = parseInt(amount)
// amount = +amount
// amount = Number(amount)
console.log(amount, typeof amount);

// convert number to string

amt = 100;

// amt = amt.toString()
// amt = String(amt)
console.log(amt, typeof amt);


// convert string to decimal

amtt = '99.5';

amtt= parseFloat(amtt)
console.log(amtt, typeof amtt);

//convert number to boolean

ammt=1
ammt=Boolean(ammt)

console.log(ammt, typeof ammt);

// NaN (not a number) it comes when we try to convert string to number 

a="gaurav";
a=Number(a)

console.log(a,typeof a);

// NaN cases

console.log(Math.sqrt(-1));
console.log(1+NaN)
console.log(undefined +undefined);
console.log('fool'/3);