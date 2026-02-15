//forEach , map , filter , reducer , set


//forEach loop
const arr = [10,60,8,9,5,64];

//for accessing values
arr.forEach((number)=>{
    console.log(number);
})

//for accessing values and indexes
arr.forEach((number,index)=>{
    console.log(number,index);
})

//for accessing values ,index and whole array
arr.forEach((number,index,arr)=>{
    console.log(number,index,arr);
})

//how to find sum of array
let sum = 0;
arr.forEach((number)=>{
    sum+= number ;
})
console.log(sum)

const arr2 = [10,60,8,9,5,64 ,45, 56];

const newArr = arr2.filter((number)=> number>25);
console.log(newArr);

// const ar = [15,65,85,12,13,0,15,45,48,41] ;
// let compare =(number)=> number>25 ;
// ar.filtering = function(){
//     const val = [];
//     for (let num of ar){
//         if (compare(num)){
//             val.push(num);
//         }
//     }
//     return val ;
     
// }
// console.log(ar.filtering());


//Mapping used for selecting specific values from objects
const arr3 = [2,3,6,5,9,5,4,5];
const newArr3 = arr3.map((num)=>num*2);
console.log(newArr3);


//reducer



