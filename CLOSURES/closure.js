// closure : A function that remembers variables from its outer scope even 
// after the outer function has finished executing.
// there are three type of scope in js

// 1. global scope -> variables declared outside of any function or block are
//  in the global scope and can be accessed from anywhere in the code.

// 2. function scope -> variables declared inside a function are in the
//  function scope and can only be accessed within that function.

// 3. block scope -> variables declared with let or const inside a
//  block (e.g., if, for, while) are in the block scope and can only
//  be accessed within that block.

//var is function scoped, while let and const are block scoped.
// var a = 10; // global scope
// function foo() {
//     var b = 20; // function scope
//     if (true) {
//         var c = 30; // function scope, not block scope
//     }
//     console.log(b); // 20
//     console.log(c); // 30
// }


// closure is a function that has access to the parent scope,
//  even after the parent function has closed


let a = 10;
const b = 20;
if (true) {
    let a = 30;
    const b = 40;
    console.log(a); // 30
    console.log(b); // 40
}
console.log(a); // 10
console.log(b); // 20

function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log(count);
    }
    return inner;
}
const counter = outer();
counter();
counter();
counter();


function createCounter(){

    function increment(){
        console.log("i am an increment function");
    }
    return increment;
}
const count = createCounter();
console.log(count);  // will result in [Function: increment]
count(); //will result in "i am an increment function"


//HOF :higher order function
//when an function takes  functions as an arguments(callbacks) or returns an function 
//this is known as higher order function