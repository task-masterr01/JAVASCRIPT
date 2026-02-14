// function

//creation
function hello(){
    console.log("welcome sir!!");
}
hello();


function helo(){
    console.log("welcome back sir ");
    return "welcome back sir how was your day !!" ;
}
console.log(helo());

//parameterized function        default values :if user doesn't give values use default values
function addNUmbers(num1 , num2, num3 = 0 , num4 = 0){
    const sum = num1 + num2+ num3 + num4 ;
    console.log(sum);
} 
addNUmbers(25,56);
addNUmbers(12 , 45 ,56);
addNUmbers(15 , 5 , 65, 9);
console.log(hello()); //this will return undefined at the end 
// becuase function hello doesn't have any return command


//what if we don't know how many arguments user will pass 

//rest operator [ function function_Name (...parameter)]
function addNumber(...num){ //this will create an array of arguments
    sum = 0;
    for (let i of num){
        sum += i ;
    }
    console.log(sum);
}
addNumber(5,4,8);
addNumber(12 , 45);
addNumber(15 , 5 , 65, 9,15);


//spread oparator in array
const arr1 = [15,45,48,48,59];
const arr2 = [26,35,26,26,26,59];
const ans = [...arr1 , ...arr2]; //this will merge both arrays in single one
console.log(ans);

const [first , second , ...numm] = arr1;
console.log(first , second);
console.log(numm);


//function : expression
//in this one we have to initialize first then we can call the function
const addNum = function(num1 , num2){
    return `the sum of numbers is ${num1+num2}` ;
}
console.log(addNum(45,55));

//Arrow function

const greet = ()=> {
    console.log("hello sir");
}
greet();

// const addNums = (num1 , num2)=>{
//     return num1+num2 ;
// }//this is an long way 

//instead we can use
const addNums= (num1,num2) => num1+num2 ;
 
console.log(addNums(100 , 150));

//const squareNumber = (num) => num*num ;
//if we have single parameter we don't have to use round brackets in parameter
const squareNumber = num => num*num ; 

console.log(squareNumber(6));

//how to return an object using function
// 1.) normal way
// const greets = ()=> {
//     user = {
//         name :"hemant",
//         age : 21
//     }
//     return user;
// }

// 2.)
// const greets = ()=> {
//     return {
//         name :"hemant",
//         age : 21
//     }
// }

// 3.) best way
const greets = ()=>({name:"hemant",age:21});

console.log(greets());


//IIFE(Immedieatly invoked function) :called as soon as declared
(function greetings() {
    console.log("hello sir , welcome back");
})();

(()=> {
    console.log("hi welcome!!");
})();

