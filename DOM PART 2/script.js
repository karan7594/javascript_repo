// let id = document.querySelector("#myId")                          //access the id 
// console.log(id)

// let div = document.querySelector("div")    
// console.log(div)                   //access the div



// let value = id.getAttribute("id")
// console.log(value)                                         //get the value of id

// let att = document.querySelector(".myClass")
// console.log(att)

// let value = att.getAttribute("class")
// console.log(value)

// let changeClassName = att.setAttribute("class","divclass")
// console.log(changeClassName)                                      //class name change


// let div = document.querySelector("div")    
// console.log(div)                   //access the div
// div.style.backgroundColor = "green"
// div.style.backgroundColor = "yellow"
// div.style.fontSize = "30px"


let addButton = document.createElement("button")
addButton.innerText = "click me "
console.log(addButton)

let div = document.querySelector("div")
div.append(addButton)