const post ={
    id:1,
    title:'Post One',
    body:'This is the body'

}

console.log(post);

//conver to json string

const str= JSON.stringify(post)

//json parse

const obj=JSON.parse(str)

console.log(str);
console.log(obj);

const posts=[
    {
        id:1,
        title:'Post One',
        body:'This is the body'
    
    },

    {
        id:2,
        title:'Post two',
        body:'This is the body'
    
    }


]

const str2=JSON.stringify(posts)
const obj2=JSON.parse(str2)

console.log(str2);
console.log(obj2);
