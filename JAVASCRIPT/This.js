//! window object
// console.log(this)

//! current object with anonymous function
// let obj={
//     name:"nag",
//     age:21,
//     place:"khammam",
//     fun:function(){
//         console.log(this) //it will give current object
//         console.log(this.name)
//     }
// }
// obj.fun()

//! current object with array function
// let obj={
//     name1:"nag",
//     age:21,
//     place:"khammam",
//     fun:()=>{
//         console.log(this) //it will give windows object because it we use array function
//             console.log(this.name1)
//     }
// }
// obj.fun()