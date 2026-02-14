// objects
//key values
const user = {
    name :"hemant",  //behind the seen all the properties are stored as strings
    surname : "nath",
    age : 20,
    emailId : "hemantxxx@gmail.com",
    amount : 15000,
    "home address" : "ajmer rajasthan"
}
console.log(user);
console.log(typeof user);
//CRUD operation :Create Read Update Delete

console.log(user.name);
console.log(user["name"]);
console.log(user["home address"]);

//adding new data into object
user.gender = "male";
console.log(user);

//updating existing data
user.amount = 20_000;
console.log(user);

//deleting existing data
delete user.emailId;
console.log(user);


const user2 = user ;
user2.age = 45 ;
console.log(user); //the change will also be seen in user(first object) ,why? because
//objects are copy by reference

//accessing all keys or values or both of objects 
console.log(Object.keys(user)); 
console.log(Object.values(user)); 
console.log(Object.entries(user)); 

//how to iterate over objects 
//using "for in" loop

//for keys
for (let keys in user){
    console.log(keys);
}
//for values
for (let values in user){
    console.log(values);
}
//for both
for (let key in user){
    console.log(key , user[key]);
}

//destructuring 
// let name = user.name ;
// let age = user.age ;
// console.log( name , age) ;

const {name ,age,surname} = user ;

console.log( name ,surname, age) ;

