let div=document.querySelector("div")

// fetch("https://fakestoreapi.com/products").then((res)=>{
//     return res.json()
// }).then((ele1)=>{

//     ele1.map((ele)=>{
//         console.log(ele)
//         div.innerHTML +=
//         `<h1>${ele.id}</h1>
//         <h1>${ele.title}</h1>
//         <h1>${ele.price}</h1>
//         <img src=${ele.image}>
//         <h1>${ele.description}</h1>`
        
//     })

// })

//! Modern Way to using await async

let output=async ()=>{
    let res1=await fetch("https://fakestoreapi.com/products")
    let res2=await res1.json()

    res2.map((ele)=>{
        div.innerHTML += 
        `<div id="card">
        <h1 id="space">${ele.id}</h1>
        <h1 id="title">${ele.title}</h1>
        <img src=${ele.image}>
        <p>${ele.description}</p>
        <h1>Price : ${ele.price}</h1>
        <button>buy</button>
        </div>`
    })

}
output()