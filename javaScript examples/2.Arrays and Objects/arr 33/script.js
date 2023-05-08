const library=[
{
    title:'kk1',
    author:'south',
    status:{
        own:true,
        reading:false,
        read:false
    }

},
{
    title:'kk2',
    author:'south',
    status:{
        own:true,
        reading:false,
        read:false
    }

},
{
    title:'kk3',
    author:'south',
    status:{
        own:true,
        reading:false,
        read:false
    }

}
]


library[0].status.read=true
library[1].status.read=true
library[2].status.read=true


const {title:firstbook}=library[0]


const str= JSON.stringify(library)

console.log(str);
