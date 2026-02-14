
//callback function :A callback function in JavaScript is a function passed as an
//  argument to anothbr function. This allows the receiving function, often called
//  a higher-order function, to execute the callbackfunction at a specific point
//  during its operation, typically after a particular task is completed.


function greet (){
    console.log("i am fine!!");
}
function dance(){
    console.log("i am going to dance");
}
function meet(callback){
    console.log("hello how are you");
    callback();
}
meet(greet);
meet(dance);