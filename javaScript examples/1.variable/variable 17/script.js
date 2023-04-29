const name = 'john'
const age = '31'

x= ' Hello my name is ' + name + ' and i am ' + age +' years old.'

// Template Literals

x= `Hello my name is ${name} and i am ${age} years old.`


// String properties and Methods

const s= 'Hello world'

x= typeof s

x= s[0]

x=s.__proto__;

x=s.toUpperCase()
x=s.toLowerCase()

x=s.charAt(0)
x=s.indexOf('d')

x=s.substring(2,5)

x=s.substring(7)

x=s.slice(-11,-6)

x= '          Hello world'

x=s.trim()

x= s.replace('world','john')

x=s.includes('ello')




console.log(x);