const firstName='john'
const lastName='doe'
const age=30

const person={
    firstName,
    lastName,
    age
}

console.log(person);

const todo={
    id:1,
    title:'take out trash'
    ,user:{
        name:'john' 
    }
}

const {id:todoId,
    title,
    user:{name}} =todo




console.log(todoId,title,name);

const numbers=[23,25,10,20,30]

const [first, second, ...rest]=numbers

console.log(first , second, rest);

