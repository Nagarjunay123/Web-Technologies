// console.dir(document)
// console.log(document)

//! Direct access
// console.log(document.all)
// console.log(document.head)
// console.log(document.head)
// console.log(document.title)
// console.log(document.body)
// console.log(document.scripts)
// console.log(document.images)
// console.log(document.links)
// console.log(document.forms)


//! Indirect access
//* 1) get Element by Id() -- it takes only the first element where we mentioned id attribute

// let h1=document.getElementById("heading")
// console.log(h1)
// h1.style.color = "red"
// h1.style.backgroundColor = "black"
// h1.style.border="3px solid green"

// let p=document.getElementById("para")
// console.log(p)
// p.style.border="5px solid yellow"
// p.style.fontSize="32px"

//* 2) get Element by className() --it return an object
// let a=document.getElementsByClassName("hello")
// console.log(a)
// console.log(typeof a)
// let arr=Array.from(a) //converting object into array
// arr.map((element)=>{
//     element.style.color = "green"
// })


//* 3) get Elements by name()
// let a=document.getElementsByName("password")
// console.log(a)
// a.forEach((element)=>{
//     element.style.backgroundColor = "green"
// })

//* 4) get Elements by tagname()
// let b=document.getElementsByTagName("h1")
// let arr=Array.from(b)
// console.log(arr)
// arr.map((element)=>{
//     element.style.backgroundColor = "green"
//     element.style.color="red"
//     element.style.textAlign="center"
// })

//* 5) query selector()
// let h1=document.querySelector("#heading")
// console.log(h1)
// h1.style.color="red"

// let para=document.querySelector(".para")
// console.log(para)
// para.style.color="green"

// let bt=document.querySelector("button")
// console.log(bt)
// bt.style.color="blue"
// bt.style.backgroundColor="yellow"


//* 6) query selector all()
// let h1=document.querySelectorAll("#heading")
// console.log(h1)
// h1.forEach((element)=>{
//     element.style.color="red"
// })

// let para=document.querySelectorAll(".para")
// console.log(para)
// para.forEach((element)=>{
//     element.style.color="green"
// })

// let bt=document.querySelectorAll("button")
// console.log(bt)
// bt.forEach((element)=>{
//     element.style.color="blue"
//     element.style.backgroundColor="yellow"
// })


//! write()-- it cannot give the space after the words
// document.write("hello i'm js dom")
// document.write("how are you")
// document.write("<h1>how are you</h1>")

//! writeln()-- it can give the space after the words
// document.writeln("hello i'm js dom")
// document.writeln("how are you")
// document.writeln("<h1>how are you</h1>")

//! Accessing the text content of the element
// let h1=document.getElementById("heading")
// console.log(`Text content : ${h1.textContent}`)
// console.log(`inline text : ${h1.innerText}`)
// console.log(`inline html : ${h1.innerHTML}`)

//! setting the text content
// let h1=document.querySelector("h1")
// h1.textContent ="hello everyone <span style='color:red'>bye</span>"
// h1.innerText="hi guys <span style='color:red'>bye</span>"
// h1.innerHTML="hello <span style='color:red'>bye</span>"

// let div=document.querySelector("div")
// div.innerHTML=`

//<img src="https://i0.wp.com/e0.pxfuel.com/wallpapers/909/327/desktop-wallpaper-virat-kohli-ms-dhoni-msd-thala-mobile-in-2022-ms-dhoni-dhoni-virat-kohli-ms-dhoni-and-virat-kohli.jpg?strip=all" height=600px width=500px>
//<h1>MSD-Virat</h1>

//<p>Team India Players</p>
//<button> Ok Super</button> `

//! fetching the attributes of an element
// let image=document.querySelector("img")
// let src=image.getAttribute("src")
// console.log(src)
// let height=image.getAttribute("height")
// console.log(height)
// let width=image.getAttribute("width")
// console.log(width)
// let id=image.getAttribute("id")
// console.log(id)

//! fetching the attributes with node
// let src=image.getAttributeNode("src")
// console.log(src)
// let height=image.getAttributeNode("height")
// console.log(height)
// let width=image.getAttributeNode("width")
// console.log(width)

//! fetching the all attributes
// let a=Array.from(image.attributes)
// a.forEach((element)=>{
//     console.log(element)
// })


//! setAttribute()
// let h1=document.querySelector("h1")
// console.log(h1)
// h1.innerHTML="Now we are learning about set attribute method"
// h1.setAttribute("title","h1 tag")
// h1.setAttribute("class","hello hi")
// h1.setAttribute("style","background-color: red")

// let body=document.querySelector("body")
// let darkmode=()=>{
    // body.style.backgroundColor="black"
//     body.setAttribute("style","background-color: black")
// }

//! removeAttribute()

// let remove=()=>{
//     body.removeAttribute("style")
     // body.removeAttribute("title")
// }

//! className  --if fetch the class names of element
// console.log(h1.className)

//! classList
// let h1=document.querySelector("h1")
// let body=document.querySelector("body")
// let handler=()=>{
//     h1.classList.add("something","nothing","anything")
    // h1.classList.replace("hello","hi")
    // h1.classList.remove("hi")
    // console.log(h1.classList.length)
    // console.log(h1.classList.contains("nothing"))
    // console.log(h1.classList.contains("hell"))
    // body.classList.toggle("dark")//!-----------------------------------------------------------------------------------
//     console.log(h1.classList.item(0))
//     console.log(h1.classList.item(2))
//     console.log(h1.classList.item(3))
//     console.log(h1.classList.item(10))
// }

//! create Element()

// let body = document.querySelector("body")
// let h1=document.createElement("h1")
// console.log(h1)

// let p=document.createElement("p")
// console.log(p)
// let button=document.createElement("button")
// console.log(button)

// h1.innerHTML="i'm h1 tag from js"
// p.innerText="i'm p tag from js"
// button.textContent="i'm button tag from js"

// let h1text=document.createTextNode("hello from createTextNode h1")
// let ptext=document.createTextNode("hello from createTextNode p")
// let buntext=document.createTextNode("hello from createTextNode btn")

// console.log(h1text)
// console.log(ptext)
// console.log(buntext)

// let comment=document.createComment("i'm comment from createTextNode")
// console.log(comment)

// h1.appendChild(h1text)
// p.appendChild(ptext)
// button.appendChild(buntext)

// body.appendChild(h1)
// body.appendChild(p)
// body.appendChild(button)

// body.append(h1,p,button)

// let span=document.createElement("span")
// let spantext=document.createTextNode("Im span tag")
// span.appendChild(spantext)
// body.appendChild(span)

//! insertBefore(tagname,above which tag) --moving tag 
// body.insertBefore(span,h1)
// body.insertBefore(p,h1)
// body.insertBefore(button,span)


//! children() and childNodes()

// let body=document.querySelector("body")
// console.log(body.children)
// console.log(body.childNodes)

//! replaceChild(new tag,old tag)
// let li=document.createElement("li")
// let litext=document.createTextNode("content 3")
// li.appendChild(litext)

// let ul=document.querySelector("ul")

// let uithird=ul.children[2]
// ul.replaceChild(li,uithird)

//! removechild()
let ul=document.querySelector("ul")
let elementToBeRemoved=ul.children[2]
ul.removeChild(elementToBeRemoved)