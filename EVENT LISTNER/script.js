// function handleclick(){
//     const element = document.getElementById("first");
//     element.textContent = "text have been changed";
// }

// this is also not an efficient way to using event listner
// const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     element.textContent = "text data have been changed";
// }

// instead we can use addEventListner()
 const element = document.getElementById("first");
 element.addEventListener("click" , ()=>{
    element.textContent = "text data has been changed";
 })
 element.addEventListener("click" , ()=>{
   
    element.style.backgroundColor = "brown";
 })
 // we can add multiple event listner's using addEventListner 
 