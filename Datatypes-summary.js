//Primitive

// 7 types :- String , Number , Boolean , Null , Undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 986764653436766545776n

console.log(typeof(bigNumber))


//Reference (Non Primitive)

// Array , Object , Functions


const heros = ["Karan", "Jjcbjwchb", "kcbwjciwb"];
console.log(heros)


let myObj = {
    name: "karan",
    age: 23
}
console.log(myObj)


const myfun = function NewFun(){
    console.log("Hello World");
}
console.log(myfun)


