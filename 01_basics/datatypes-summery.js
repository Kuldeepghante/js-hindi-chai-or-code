// primitive data types

// 7 types 
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



//reference (non-primitive)data types

//Array, Object, Functions 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "kuldeep",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);