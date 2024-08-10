// console.log("hellow world")
// alert("hellow");
// console.dir(document.body)
// console.log(document.body.childNodes[1]);


// let heading = document.getElementById(myId)
// console.log(myId)
// console.dir(myId)

// let heading = document.getElementsByClassName("myClass")
// console.log(myClass)
// console.dir(myClass)

// let para = document.getElementsByTagName("p")
// console.log(para)
// console.dir(para)

// let firstElement = document.querySelector("p")
// console.dir(firstElement)

// let allElement = document.querySelectorAll("p")
// console.dir(allElement)

// let allElement = document.querySelectorAll("h1")
// console.dir(allElement)

// let myClass = document.querySelectorAll(".myClass")
// console.dir(myClass)

// let div = document.querySelector("div")
// console.dir(div)

// let heading  =document.querySelector("h1")
// console.dir(heading)


// let pre  = document.querySelector("pre")
// console.dir(pre.innerText)
// pre.innerText = pre.innerText + " hellow world!"

let myClass = document.querySelectorAll(".box")
// console.dir(myClass)
let index =1;
for(let div of myClass){
    div.innerText = `this is a new div ${index}`
    index++
}
