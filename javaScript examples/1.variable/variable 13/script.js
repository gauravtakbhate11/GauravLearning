  // Values stored in stack
  const name = 'john';
//   const age = 30;

  // reference values stored in heap 

  const person={
    name: 'brad',
    age:40,
}

let newName = name;

newName= 'johnathan';

const newPerson = person;



person.name='bradely'
person.age='41'

newPerson.name='peter'

console.log(person.name,newPerson.name);

