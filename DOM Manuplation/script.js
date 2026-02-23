// //DOM manupilutaion
// console.log("hello !");
// // alert("warning!!!");
// console.log(document.body.childNodes[1]);
// document.body.childNodes[1].innerText = "blayyt" ;


// // get element by id name
// let heading = document.getElementById("first");
// console.log(heading);

// // get element by class name
// let heading2 = document.getElementsByClassName("headings");
// console.log(heading2);

// // get element by tag name
// let tags = document.getElementsByTagName("tag1");
// console.log(tags);

// //  DOM Manupilation 

//     // query selectors
//     let firstEl = document.querySelector(".myclass"); // selects first class
//     console.log(firstEl); 
//     let firstEl2 = document.querySelector("#myId"); // selects first id
//     console.log(firstEl2); 
//     let firstEl3 = document.querySelector(p); // selects first elements
//     console.log(firstEl3); 

//     // query selector all 
//     let allEl = document.querySelectorAll(p); // selects all elements
//     console.log(allEl); 

// // properties of DOM manupilation
// // tagName : returns tag for element nodes
// // innerText : returns the text content of the element and all its children
// // innerHTML : returns the plain text or HTML contents in the element
// // textContent : returns textual content even for hidden elements


// // Attributes
// // getAttribute( attr )  //  to get attribute value
// let div  = document.querySelector("div");
// console.log(div);

// let val = div.getAttribute("id");
// console.log(val);

// let h2 = document.querySelector("h2");
// console.log(h2);

// let box = h2.getAttribute("name");
// console.log(box);

// // setAttribute( attr , value  ) // to set the attribute
// div.setAttribute("id" , "newId");
// let newId = div.getAttribute("id" , "newId");
// console.log(newId);


// // node.style : we can change CSS properties using JS
// let box2  = document.querySelector("div");
// box2.style.color = "green" ;
// box2.style.backgroundColor = "red" ;
// box2.style.color = "green" ;


// inserting elements using JS
// we can add elements in 2 steps , 
// 1st initializing the element , then adding the element
// document.insertElement("div")

// node.append( el ) // adds at the end of node (inside)
// node.prepend( el ) // adds at the start of node (inside)
// node.before( el ) // adds before the node (outside)
// node.after( eI ) // adds after the node (outside)
 


let ul = document.querySelector("ul");
let newBtn  = document.createElement("button");
newBtn.innerText = " click me !!!";
ul.append(newBtn); // adds at the end of node (inside) 
// ul.prepend(newBtn); //adds at the start of node (inside)
// ul.before(newBtn); //adds before the node (outside) 
// ul.after(newBtn); // adds after the node (outside) 


// remove element
//  node.remove() // removes the node 
newBtn.remove();




 


