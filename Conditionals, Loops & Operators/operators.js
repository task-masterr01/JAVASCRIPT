// arithmetic operators
// there are 6 arithmetic operators 
// + , - ,  * ,  / , **(power) , %(modulo) 

console.log(2+5);
console.log(7-5);
console.log(2*5);
console.log(10/5);
console.log(17%5); //gives the reminder
console.log(2**3); // 2 raised to the power 3

//ASSIGNMENT Operators
//there are many type of assignment operators 
// = , =/(divide and assign) , =*(multiply and assign) ,=+(add and assign) ,
// =% (module and assign) , **= (power and assign)


x = 2;
y = 10;
x = x+y ;
x += y; //x = x+y ; x += y; both are same 
x *= 2 ; // multiply 2 with x then assign 
x /= 2 ; // divide 2 with x then assign 
x %= 2 ; // module 2 with x then assign 
x **= 2;// raise x to the power 2 then assign


// comparison operators
// there are 4 comparison operator
// > (Greater than)
// < (Less than)
// >= (Greater than or eqUal to)
// <=(Less than or equal to)
 
a = 10 ;
b = 12 ;
c= 12 ;
d = "12"
console.log(b>a);
console.log(b<a);
console.log(b<=c);
console.log(a>=c);
console.log(b==d);// due to type conversion this might result in true 
console.log(b===d); // triple equal stand for strict equality it checks value as well as type
console.log(b!=d); // not equal to operator
console.log(b!==d); // strict not equal to operator 

console.log(b==d); //will result in true
console.log(b===d); //will result in false due to different type
e = Number(d);
console.log(e);
console.log(b===e); //will result in true because we changed type of d then saved in e
f = "1235da0" ;
g = Number(f); // this will result in NaN because f is not a pure number string
console.log(g); 
console.log(isNaN(g)); // this will return true because g is NaN:not a number

// how to convert number into string ?? 
// use String()
 t = 120;
 r = String(t);
 console.log(r);
 console.log(typeof r);

 // how to convert boolean into Number and string and what will be the result
 // its true it will result in 1 , if false then 0 same case with null 
 console.log(Number(true)); // will result in 1 
 console.log(Number(false)); // will result in 0
 console.log(Number(null)); // will result in 0
 // but for undefined it will result in NaN 
 console.log(Number(undefined)); // will result in NaN

 console.log(String(true));
 console.log(String(false));
 console.log(String(null));
 console.log(typeof String(true));
 console.log(typeof String(false));
 console.log(typeof String(null));

 // number & string to boolean 
 // in number aside from 0 everything will result in true
 // in string aside from null and empty string everything will result in true 
 console.log(Boolean("apple")); //true         
 console.log(Boolean(""));      //false
 console.log(Boolean(-110));    //true
 console.log(Boolean(0));       //false
 console.log(Boolean(10));      //true

 // computer science challenges
 p = 0.1;
 j = 0.2;
 k = p +j ;
 console.log(0.3===k); // will result in false why , major flaw of JS
 console.log(k); // will result in 0.30000000000000004 

 // 1.) null is loosely equal to undefined only
console.log(null == undefined); // true
console.log(null === undefined);//false
console.log(null == 0);         //false
console.log(null == true);      //false
console.log(null == false);     //false

// 2.) in expression that have comparison operator(< , >, >=, <=) null will be converted in number
//     null --> number (0) amd undefined --> NaN

console.log(null >= 0); // will result in true because null will be converted in 0
console.log(5 > null) // will result in true
console.log(null > undefined) // will result in false due to invalid comparison
console.log( 5 > undefined) // will result in false due to invalid comparison

console.log(null >= "") // will result in true because both will be converted in 0
console.log(undefined == undefined) //will result in false
console.log(5 > undefined); // will result in false due to invalid comparison


    
