/*
// how to make variables in javascript
// there are three ways to declare variables in javascript: var, let, and const

// 1. var
var name = "John";
console.log(name); // Output: John  
name = "Doe";
console.log(name); // Output: Doe           
// var allows you to reassign and redeclare variables

// 2. let
let age = 25;
console.log(age);
age = 30;
console.log(age); 
// let allows you to reassign but not redeclare variables

// 3. const
const country = "USA";
console.log(country); 
// country = "Canada"; // This will throw an error
// const does not allow you to reassign or redeclare variables
// However, if the const variable is an object or array,
//  you can modify its properties or elements

const person = { firstName: "John", lastName: "Doe" };
person.firstName = "Jane";  
console.log(person.firstName); // Output: Jane

const numbers = [1, 2, 3];
numbers.push(4);  
console.log(numbers); // Output: [1, 2, 3, 4]   
// In summary:
// - Use var for function-scoped variables (not recommended in modern JS)
// - Use let for block-scoped variables that may change
// - Use const for block-scoped variables that should not change

// Note: It's a good practice to use let and const over var in modern JavaScript development.
*/

/*
let box = 5;
console.log(box);

box = "square shaped" ;
console.log(box);

var circle = 25;
console.log(circle);

var circle = "perfect speare" ;
console.log(circle);

const popi = "unchangeable";
console.log(popi);

const list = [ 1 , 2 , 3 , 5 ];
console.log(list);
list[3] = 4 ;
console.log(list) ; 

const list2 = { first : "rahul" , second: "raju"};
console.log(list2) ;
console.log(list2.first);

list2.first = "raj" ; 
console.log(list2);

*/

// data types 

// there are two types of data types 

// 1.)  primitive data types 
//      number , string , undefined , null , Boolean , BigInt , symbol

//   i.)   number ( int and float both has number data type)
let a = 5000 ; // integer
let b = 3.14 ; // float 
console.log(a , b );

//   ii.)  string 
let c = "IS'nt the moon lovely " ; 
let d = 'bulbul' ;
console.log( c , d);

//   iii.)  boolean 
let login = true ;
let user = false ;
console.log(login , user) ; 

//   iv.)  undefined
let users;
console.log(users); 

//   v.)  BigInt
let num = 1254874845485485n;
console.log(num);

//   vi.)  null
let user_data = null ;

// let weather = current_weather("ajmer");
//expected outputs : 
//  25 deg 
// null       * exists but not able to fetch data 
// undefined  * data doesn't exist in system




// ** difference between null & undefined

// null's Purpose: Represents the unintentional absence of a value. A variable that 
// has been declared but not assigned a value is automatically undefined.

// undefined's purpose : Represents the intentional absence of any object value. 
// It is a primitive value explicitly assigned by a developer to indicate "no value."
 

//   v.)  symbol
//const id1 = symbol("id");
//console.log(id1);



// 2.) Non primitive data types 
//     Array , object , function

// i.) array
let arr = [11 , 23 ,33 , "apple" , true ] ;
console.log(arr);
console.log(arr[2]);


// ii.) object 
let obj = { name : "hemant" , class : "2nd year" , age : 20 } ;
console.log(obj);
console.log(obj.name);


// function 
    /* function msg (){
        return "hello world !! " ;
        } 
        console.log(msg());
    */  
//we can also save an function into an variable 
let v = function msg (){
        console.log( "hello world !! ") ;
        }
v();