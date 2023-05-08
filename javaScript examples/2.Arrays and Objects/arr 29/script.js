let x

const person ={

name:'John Doe',
age:30,
isAdmin:true,

address:{
street:'221 baker street',
city:'boston',
state:'MA',
},

hobbies:['cricket','music']
}


x=person.name
x=person['name']
x=person.age
x=person.hobbies
x=person.address
x=person.hobbies[0]

person.name='johny doe'
person.isAdmin=false

delete person.age

person.hasChildren = true

person.greet= function(){
    console.log(`Hello my name is ${this.name}`);
}

person.greet()

console.log(person);