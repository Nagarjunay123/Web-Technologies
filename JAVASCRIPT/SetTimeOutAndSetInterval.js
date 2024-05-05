//! SetTimeOut
// setTimeout(() => {
//     console.log("I'm time out");
// }, 1000);

//! set Time Interval

// setInterval(() => {
//     console.log("I'm time interval");
// },3000)
//@ we need to control time interval iteration

// let count=0
// let a=setInterval(() => {
//     console.log("I'm time interval");
//     count++
//     if(count==3){
//         clearTimeout(a)
//     }
// },2000)

//@ pause the timeout

let t1=setTimeout(() => {
    console.log("I'm time out");
},2000)

setTimeout(() => {
    console.log("cleared in 1 seccond")
    clearTimeout(t1)
},1000)
let count=0
let a=setInterval(() => {
    console.log("I'm time interval");
    count++
    if(count==3){
        clearTimeout(a)
    }
},2000)
