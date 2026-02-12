age = 17;
if (age <18){
    console.log("you are not eligible to vote !!");
}
else{
    console.log("you are eligible to vote !!");
}
a = 10 ;
b = 12 ;
if (a>b){
    console.log("a is grater than b");
}
else if (b > a ){
    console.log("b is greater than a");
}
else{
    console.log("both are equal");
}

//logical operators
// "&&" (logical AND) : both condition must be true
// "||"(logical OR) : atleast one condition must be true

//AND
console.log(true && true); //will result in true
console.log(true && false);//will result in false
console.log(false && true);//will result in false
console.log(false && false);//will result in false

//OR
console.log(true || true); //will result in true
console.log(true || false);//will result in true
console.log(false || true);//will result in true
console.log(false || false);//will result in false

//AND
m = "mohit";
n = "rohit";
let p = m&&n;
console.log(p );//this will result in rohit why? because if first condition is true 
// it will return 2nd one as an output ,
// but if first one is false it will not check 2nd condition and return false
m = "";
p=m&&n;
console.log(p); 

aa = 0;
bb = 20;
console.log(aa&&bb);
//if first value if false it will return first 1st value itself
//if first value is true it will return 2nd value 

//  OR
h = 10 ;
j = 1 ;
l = h||j ;
console.log(l);
//if first value is true it will return 1st value itself
//but if 1st value is false it will return 2nd value    