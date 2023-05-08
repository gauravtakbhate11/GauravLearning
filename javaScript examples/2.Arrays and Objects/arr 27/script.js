let x;

const fruits = ['apple', 'pear', 'orange']
const berries = ['strawberry', ' blueberry', 'rasberry']

// fruits.push(berries)

// x = fruits[3][2]

// const allFruits = [fruits,berries]

// x = allFruits[0][3][0]

// x=allFruits[1][0]


x = fruits.concat(berries)

x = [...fruits,...berries]

const arr = [1,2,[3,4],5,[6,7],8]

x= arr.flat()

// Static Methods of Array Object

x= Array.isArray(fruits)

x=Array.from('12abc')


const a=1;
const b=2;
const c=3;
x= Array.of(a,b,c)


console.log(x);


