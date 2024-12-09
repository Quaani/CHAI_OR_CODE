// primitive

// 7 types : string, Number, Boolean, Null, undefined, symbol, BinInt

const score = 100
const scoreValue = 100.9

const isLoggedIn = false
const outsideTemp = null
let user;

const id = Symbol('131313')
const anotherId = Symbol('131313')

// console.log(id===anotherId);

const bigNumber = 12344344667536478n



// Referance: Non-primetive

// Arrays, Object, Function

const heros = ["marvel", "ironman", "spiderman" ];

let myobj ={
    name: "bhuwan",
    age: 18,
}

const myFunction = function(){
    console.log("Quani");
}

console.log(typeof bigNumber, myFunction, outsideTemp);
