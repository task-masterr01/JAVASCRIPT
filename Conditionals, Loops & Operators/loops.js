// for loop
//for loop want initialization , termination , update after each cycle 
for (let i = 0  ;      i < 5  ;      i++) {
//  initialize      termination     update(increment/decrement)
    console.log("Iteration number: " + i);
}       
// while loop
let j = 0;  
while (j < 5) {
    console.log("While loop iteration: " + j);
    j++;
}
// do...while loop
let k = 0;
do {
    console.log("Do...While loop iteration: " + k);
    k++;
} while (k < 5);
// for...in loop (for objects)
const obj = {a: 1, b: 2, c: 3};     
for (const key in obj) {
    console.log(key + ": " + obj[key]);
}
// for...of loop (for iterable objects like arrays)
const arr = [10, 20, 30, 40, 50];     
for (const value of arr) {
    console.log("Array value: " + value);
}   
// nested loops
for (let m = 1; m <= 3; m++) {
    for (let n = 1; n <= 2; n++) {
        console.log("Outer loop: " + m + ", Inner loop: " + n);
    }
}
// break and continue
for (let p = 0; p < 10; p++) {
    if (p === 5) {
        break; // exit loop when p is 5
    }   
    if (p % 2 === 0) {
        continue; // skip even numbers
    }   
    console.log("Value of p: " + p);
}
// infinite loop (commented out to prevent execution issues)
// while (true) {
//     console.log("This is an infinite loop");
// }
// Be cautious with infinite loops as they can crash your program.
// Use break statements wisely to exit loops when necessary.
// Always ensure loop conditions will eventually be met to avoid infinite loops.
// Practice converting loops from one type to another for better understanding.
// Review and practice different loop constructs to solidify understanding.
// Remember to test edge cases, such as empty arrays or objects, when using loops.
// Note: For more complex scenarios, consider using higher-order functions like forEach, map, filter, and reduce for array manipulations.
// Happy coding with loops!