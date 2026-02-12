//  string 

// str1 = "bulbul";
// str2 = 'deep' ; 
// str4 = 'radhey';
// str3 = `hello princess ${str4}`;
// console.log(str3);

const str = `hello my friend ,are you my friend ?`;
console.log(str.length); // gives the length of the string
console.log(str[0]);

console.log(str.toUpperCase);
console.log(str); 
const a = str.toUpperCase;
const b = str.toLowerCase;
console.log(a);

//indexOf
console.log(str.indexOf('my'));
console.log(str.indexOf("My")); // will result in false due to case sensitivity 
console.log(str.indexOf("helo")) // will result in -1(false) ,beacuse string must be contegious

//lastIndexOf
console.log(str.lastIndexOf("my"));

//includes
console.log(str.includes('friend'));

//Extracting substring(slice)
console.log(str.slice(0 , 15));
console.log(str.slice(17));
console.log(str.slice(-8));
console.log(str.slice(-8 , -5));

//substring

console.log(str.substring(0 , 15)); //the difference between slice and substring is we can't 
                                    // mark down negetive index eg., str.substring(-4 , -1);

// concatination
x = "bulbul" ; 
y = "sharma" ; 
z = a + " " + b ; //why empty string in between of a and b ?, to add  space in between 
console.log(z);
console.log(12  + z);
console.log( 14 + y + 6);
console.log(10 + 10 + z);

// replace & replaceAll 
console.log(str.replace("my" , "our"));
console.log(str.replaceAll("my" , "our"));


// trim 
const user = " Aman ";
console.log(user); 
console.log(user.trim());
console.log(user.trimStart());
console.log(user.trimEnd());

// SPLIT
const names = "Aman,ajay,suraj,ayan,ravish,rakesh";
console.log(names.split(","));







