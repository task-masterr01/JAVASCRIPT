// // // objects
// // //key values
// // const user = {
// //     name :"hemant",  //behind the seen all the properties are stored as strings
// //     surname : "nath",
// //     age : 20,
// //     emailId : "hemantxxx@gmail.com",
// //     amount : 15000,
// //     "home address" : "ajmer rajasthan"
// // }
// // console.log(user);
// // console.log(typeof user);
// // //CRUD operation :Create Read Update Delete

// // console.log(user.name);
// // console.log(user["name"]);
// // console.log(user["home address"]);

// // //adding new data into object
// // user.gender = "male";
// // console.log(user);

// // //updating existing data
// // user.amount = 20_000;
// // console.log(user);

// // //deleting existing data
// // delete user.emailId;
// // console.log(user);


// // const user2 = user ;
// // user2.age = 45 ;
// // console.log(user); //the change will also be seen in user(first object) ,why? because
// // //objects are copy by reference

// // //accessing all keys or values or both of objects 
// // console.log(Object.keys(user)); 
// // console.log(Object.values(user)); 
// // console.log(Object.entries(user)); 

// // //how to iterate over objects 
// // //using "for in" loop

// // //for keys
// // for (let keys in user){
// //     console.log(keys);
// // }
// // //for values
// // for (let values in user){
// //     console.log(values);
// // }
// // //for both
// // for (let key in user){
// //     console.log(key , user[key]);
// // }

// // //for of loop
// // //we can't directly use for of loop on objects but somehow we can
// // //for keys
// // for (let keyy of Object.keys(user) ){
// //     console.log(keyy);
// // } 
// // //for values
// // for (let value of Object.values(user)){
// //     console.log(value);
// // }
// // //for both
// // for (let entry of Object.entries(user)){
// //     console.log(entry);
// // }

// // for (let [key2 , value2] of Object.entries(user)){
// //     console.log(key2 , value2);
// // }

// // //destructuring 

// // // let name = user.name ;
// // // let age = user.age ;
// // // console.log( name , age) ;

// // const {name ,age,surname} = user ;

// // console.log( name ,surname, age) ;

// // //what if we want to take property with different name
// // const {name:userName , age:userAge} = user; //this will access name as userName and age as userAge
// // console.log(userName ,userAge) ;

// //function in obejcts
// const sample ={
//     name :"hemant",
//     greeting : function(){
//         console.log(`welcome back ${this.name} sir!!`);
//         return 10;
//     }
// }

// sample.greeting();
// const va = sample.greeting();
// console.log(va);

// const sample2 ={
//     name : "mohit",
//     age : 21
// }
// sample2.greeting = sample.greeting;
// console.log(sample2.greeting());


// //nested objects
// const userData = {
//     name :"aayush",
//     age : 21,
//     gender: "male",
//     address : {
//         pincode : "305001" ,
//         city : "ajmer",
//         state : "rajasthan",
//     }
// }

// console.log(userData.name);
// console.log(userData.address.city);

// //this will create an independent copy of userData where we can modify the data in user2
// //and the changes won't be reflected on userData but only on 1st label

// //shallow copy
// const userData2 = {...userData};
// userData2.name = "mohan";
// console.log(userData2);
// userData2.address.city = "jaipur"; //this change will also be shown in userData ,why?
// console.log(userData);              //becuase this create an shallow copy of data

// //deep copy
// const userData3 = structuredClone(userData);
// userData3.address.city = "ajmer";
// console.log(userData);
// console.log(userData3);


// //we can also use numbers as keys
// const users = {
//     name : "rohit",
//     0 : 25,
//     1 : 36,
//     2 : 45,
//     3 : 78
// }
// console.log(users[0]);
// console.log(users["0"]);

//keys can be strings , symbols or numbers
const sym = Symbol("id1");
const user2 = {
    name : "rohit",
    0 : 25,
    1 : 36,
    2 : 45,
    3 : 78,
    [sym] :"hello sir"
}
console.log(user2[sym]);