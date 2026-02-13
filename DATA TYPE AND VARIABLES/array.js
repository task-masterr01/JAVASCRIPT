// ARRAY

// let marks1 = 100;
// let marks2 = 10;
// let marks3 = 15;
// let marks4 = 25;
// let marks5 = 40;

let marks = [100 , 10 , 15, 25 , 40];
console.log(marks);

//lenght
console.log(marks.length);

let arr  = [100 , 25 ,34 , "rohit" , true];

console.log(arr[0]); //indexing starts from 0
console.log(typeof arr); // object 

arr[1] = 45 ; //arrays are mutable so we can modify values
console.log(arr);

//ADDING new element to array
//push : insert new element at end
arr.push("marks"); // new element will be stored at last index
arr.push("new data");
console.log(arr);

//pop operation : deleting element from end
arr.pop();
console.log(arr);

//add element at first index and delete element at first place
arr.unshift("rohit sain");
console.log(arr);
//deleting first element
arr.shift();
console.log(arr);

//how to iterate over array
// 1.)basic for loop
let myArr = [25 , 25, 62 ,63, 24, 15,85];
for (let i = 0 ; i< myArr.length ; i++){
    console.log(myArr[i]);
    
}

// "for of" loop
for (let num of myArr){
    console.log(num);
}

//primitive : copy by value
//non primitive: copy by reference
const myarr2 = [12,15,14,48,59,56,51];
// myarr2 = [15,121,62]; //not possible
let myArr3 = myarr2;
myArr3.push(100);       //is this change also gonna update in array2 ? 
                        // yes because arrays are pass by reference
console.log(myarr2);

//slice operation      from  to
console.log(myarr2.slice(2 , 4));

//splice : parmamnet trim
const myArr4 = myarr2.splice(4, 2 , "rohit" , "aayush");

console.log(myarr2);


// merging array

