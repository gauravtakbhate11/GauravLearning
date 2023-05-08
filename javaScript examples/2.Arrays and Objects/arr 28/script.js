

// challenge 1

const arr = [1,2,3,4,5]

arr.push(6)
arr.unshift(0)

arr.reverse()

console.log(arr);

// challenge 2
let x;
const arr1=[1,2,3,4,5]
const arr2=[5,6,7,8,9,10]

arr2.splice(0,1)

// x =arr1.concat(arr2)

x=[...arr1,...arr2]

console.log(x);