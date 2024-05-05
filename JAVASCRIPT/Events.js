//! 1st way to add event
// let firstEvent = ()=>{
//     alert("This is the first event")
// }
//! 2nd way to add event
// let handlePrompt =()=>{
//     let name = prompt("Enter your name")
//     console.log(name)
// }
// let secondEvent=document.querySelector("#second")
// secondEvent.onclick=handlePrompt

//! 3rd way to add event
// let cnf=()=>{
//     confirm("Are you sure you want to continue")
// }

// let btn3=document.getElementById("third")
// btn3.addEventListener("click",cnf)

//----------------------------------------------------------------
//! mouseenter 
// let div=document.querySelector("div")
// div.addEventListener("mouseenter",()=>{
//     div.style.color="red"
//     div.style.background="black"
// })


//! mouseleave
// div.addEventListener("mouseleave",()=>{
//     div.style.color="yellow"
//     div.style.background="blue"
// })

//! dblclick --doubleclick

// let h1=document.querySelector("h1")
// h1.addEventListener("dblclick",()=>{
//     h1.style.color="green"
// });

// let body=document.querySelector("body")
// let btn=document.querySelector("button")
// btn.addEventListener("dblclick",()=>{
//     body.style.color="red"
//     body.style.backgroundColor="black"
// })

//! change
// let input=document.querySelector("input")
// input.addEventListener("change",()=>{
//     input.style.color="green"
//     input.style.backgroundColor="black"
// });
// let select=document.querySelector("select")
// select.addEventListener("change",()=>{
//     select.style.color="green"
//     select.style.backgroundColor="black"
// });
// let textarea=document.querySelector("textarea")
// textarea.addEventListener("change",()=>{
//     textarea.style.color="green"
//     textarea.style.backgroundColor="black"
// });

//! input
// let input=document.querySelector("input")
// input.addEventListener("input",()=>{
//         input.style.color="green"
//         input.style.backgroundColor="black"
//     });

//! keypress,keydown and keyup
// let input=document.querySelector("input")
//@ keypress
// input.addEventListener("keypress",(e)=>{
//     console.log(`The key pressed is ${e.key}`)
//     console.log(`The key pressed is ${e.keyCode}`)
// })

//@ keydown
// input.addEventListener("keydown",()=>{
//     console.log(`The key is down`)
// })

//@ keyup
// input.addEventListener("keyup",()=>{
//     console.log(`The key is up`)
// })

//! random colors generation
// let body=document.querySelector("body")
// let btn=document.querySelector("button")
// let h1=document.querySelector("h1")
// h1.textContent="rgb(255,255,255)"
// btn.addEventListener("click",()=>{
//     let colors=generate();
//     h1.innerHTML=colors;
//     body.style.backgroundColor=colors
// });
// let generate=()=>{
//     let red=Math.trunc(Math.random()*255)
//     let green=Math.trunc(Math.random()*255)
//     let blue=Math.trunc(Math.random()*255)
//     return `rgb(${red},${green},${blue})`
// }

//! Event Capturing phases 
// syntax: addEventListener(event,function,useCapture)
//@ Event Bubbling phase
// -- we get both inner and outer alert box 
// let outer=document.getElementById("outer")
// let inner=document.getElementById("inner")
// outer.addEventListener("click",()=>{
//     alert("Outer box clicked")
// })
// inner.addEventListener("click",()=>{
//     alert("inner box clicked")
// })

//@ Event Capturing phase
// -- we get both outer and inner alert box 
// let outer=document.getElementById("outer")
// let inner=document.getElementById("inner")
// outer.addEventListener("click",()=>{
//     alert("Outer box clicked")
// },true)
// inner.addEventListener("click",()=>{
//     alert("inner box clicked")
// },true)

//@ StopPropagation phase
// let outer=document.getElementById("outer")
// let inner=document.getElementById("inner")
// outer.addEventListener("click",()=>{
//     alert("Outer box clicked")
// },false)
// inner.addEventListener("click",(a)=>{
//     alert("inner box clicked")
//     a.stopPropagation()
// },true)
