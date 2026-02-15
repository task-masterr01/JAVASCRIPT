//hoisting :Hoisting is JavaScript's behavior of knowing about a variable
//  or function's existence before executing the code. How it treats that
//  knowledge depends on the keyword (function, var, let, or const).


console.log(a); //undefined
var a = 10;
console.log(a); //10    
//hoisting with function
hoistedFunction();
function hoistedFunction() {
    console.log("This function is hoisted");
}
//hoisting with let and const
// memory allocatoin for let and const happens at the beginning of the block,
// but they are not initialized until their definition is evaluated.
// This is known as the "temporal dead zone" (TDZ). Accessing them before 
// initialization will result in a ReferenceError.
console.log(b); //ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); //20
console.log(c); //ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c); //30

