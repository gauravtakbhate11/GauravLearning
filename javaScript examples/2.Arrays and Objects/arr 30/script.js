let x;

const todo=new Object();



todo.id=1;
todo.name='Buy milk'
todo.completed=false;

const person={
    address:{
        coords:{
            lat:42.0023,
            long:78.2323
        }
    }
}

x=person.address.coords.long

const obj1 ={ a:1,b:2}
const obj2 ={ c:3,d:4}

const obj3 ={obj1,obj2}

const obj4 ={...obj1,...obj2}
const obj5 = Object.assign({},obj1,obj2)

const todos=[
    {id:1 , name:'take out the trash'},
    {id:2 , name:'pickup kids from school'},
    {id:3 , name:'Buy milk'}
]


x=todos[1].name

x=Object.keys(todo)

x=Object.keys(todo).length

x=Object.values(todo)

x=Object.entries(todo)

x=todo.hasOwnProperty('name')





console.log(x);