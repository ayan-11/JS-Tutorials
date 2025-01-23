//Primitive
// - 7 types:- String, Number, Boolean, null,undefined, Symbol, Bigint

const id = Symbol('123')
const newid = Symbol('123')

console.log(id === newid) // Output - False : as id and newid are 2 different symbols

const bigNumber = 135443186443135n // if we put n after the number then it represents bigint datatype


//Reference/ Non- Primitive
// - 3 types:- Arrays, Objects, Function

const heros = ['shaktiman','naagraj','doga']

let myObj = {
    name:'ayan',
    age:22,
}

const myFunction= function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber);
