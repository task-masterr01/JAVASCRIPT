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
// const x = [12,15,1,12,41];
// const y = [15,true ,false ,36,59];
// const z = [15,62,95,"rohit" ,5];

// // x.push(y);
// // console.log(x); //will result in --> [ 12, 15, 1, 12, 41, [ 15, 15, 26, 36, 59 ] ]

// const w = x.concat( y,z);
// console.log(w);

//spread operator ...variable
// const x = [12,15,1,12,41];
// const y = [15,true ,false ,36,59];
// const z = [15,62,95,"rohit" ,5];
// const w = [...x , ...y , ...z];
// console.log(w);


const names = ["aayush" , "raj" , "aman" ,"raj"];
console.log(names.toString());

//join()
console.log(names.join(" "));

//indexOf : reutrns the index of first time an item appear in an array
console.log(names.indexOf("raj")); //gives index value if exists otherwise -1

//lastIndexOf : raturns the index of the last time an item appears
console.log(names.lastIndexOf("raj"));

//includes : checks if an element exists in array
console.log(names.includes("aman")); 

//sort
console.log(names.sort()); //names are sorted on the basis of ascii table

//reverse
console.log(names.reverse()); 

const a = [101 , 22 , 35 , 45];
console.log(a.sort()); //will result in [ 101, 22, 35, 45 ] , why? being treated as string
//solution
console.log(a.sort((a,b)=> a-b)); // this will sort this array
//desending order
console.log(a.sort((a,b)=> b-a));

const ary = [25,26,24,[15,45,[56,25,45],95,52] ,45];
console.log(ary[3]); // this will result in [15,45,95,52] ,how to access single element
console.log(ary[3][1]); // now we can access single element 
console.log(ary[3][2][0]);

//flat 
console.log(ary.flat()); // this will flat array on a single level ,how
//  to flat array on multiple levels ? use flat(infinity)
console.log(ary.flat(Infinity));
