//DOM manupilutaion
console.log("hello !");
// alert("warning!!!");
console.log(document.body.childNodes[1]);
document.body.childNodes[1].innerText = "blayyt" ;


// get element by id name
let heading = document.getElementById("first");
console.log(heading);

// get element by class name
let heading2 = document.getElementsByClassName("headings");
console.log(heading2);

// get element by tag name
let tags = document.getElementsByTagName("tag1");
console.log(tags);

//  DOM Manupilation 

    // query selectors
    let firstEl = document.querySelector(".myclass"); // selects first class
    console.log(firstEl); 
    let firstEl2 = document.querySelector("#myId"); // selects first id
    console.log(firstEl2); 
    let firstEl3 = document.querySelector(p); // selects first elements
    console.log(firstEl3); 

    // query selector all 
    let allEl = document.querySelectorAll(p); // selects all elements
    console.log(allEl); 

// properties of DOM manupilation
// tagName : returns tag for element nodes
// innerText : returns the text content of the element and all its children
// innerHTML : returns the plain text or HTML contents in the element
// textContent : returns textual content even for hidden elements