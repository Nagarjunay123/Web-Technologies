//! for-in loop
//@ it returns index when itterated upon arrays
// let arr=["advance","happy","birthday"]
// for(let i in arr){
//     console.log(i)
//     console.log(arr[i])
// }

//@ it returns key names when itterated upon object
// let obj = {
//     name:"nag",
//     age:21,
//     place:"kmm"
// }
// for(let i in obj){
//     console.log(i)
// }

//! for-of loop
//@ it returns array element when itterated upon arrays
let arr=["advance","happy","birthday"]
// for(let i of arr){
//     console.log(i)
// }

//@ it  cannot be iterate upon the object
let obj = {
    name:"nag",
    age:21,
    place:"kmm"
    }
for(let i of obj){
    console.log(i)
}