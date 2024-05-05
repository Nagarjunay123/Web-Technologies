//! 1.Normal function

//@ 1)function without parameters without return keyword
// function add(){
//     console.log(5+5)
// }
// add()
//functions are reuseble can call as many times you want
// add()
// add()
// add()

//@ 2)function with parameters without return keyword
// function add(a,b){
//     console.log(a+b)
// }
// add(10,20)
// add(20,20)

// function add(a,b,c){
//     console.log(a+b+c)
// }
// add(10,20,30,40)
// add(20,20,60,200)

//@ 3)function without parameters with return keyword
// function add(){
//     return "welcome to JavaScript"
// }
// console.log(add())

//@ 4)function with parameters with return keyword
// function add(a,b){
//     return a+b
// }
// console.log(add(10,20))
// console.log(add(100,20))

//! 2.Anonymous function

// let a=function () {
//     console.log("i'm anonymous function")
// }
// a();

// let b=function (a,b) {
//     return a+b;
// }
// console.log(b(10,20));

//! 3.Arrow function

//@ Explicite
// let a=()=>{
//     console.log("i'm arrow function");
// }
// a();

// let b=(a,b)=>{
//     return a+b;
// }
// console.log(b(10,20));


//@implicite
//we are removing the curly braces and return keyword it is just for one line
// let c=()=> "i'm explicite arrow function"
// console.log(c());

// let d=(val)=> val
// console.log(d(20));

//we are removing the curly braces and return keyword and whenever the function has no parameter instand of paranthesis we can use underscore
// let e=_=>"im underscore"
// console.log(e());

//whenever we have a one parameter no need use parentheses
// let f=val=>val+val
// console.log(f(10));


//! 4.Immediate Invoked Function Expression
// ((a)=>{
//     console.log("i'm IIFE "+a)
// })
// (10);//calling 

// (function(){
//     console.log("i'm IIFE again")
// })
// ();//calling 

// (function hello(){
//     console.log("i'm IIFE again 2")
// })
// ();//calling 


//! Higher Order Functions

const add=(a,b)=>a+b
// console.log(add(10,20))

const sub=(a,b)=>a-b
// console.log(sub(10,20))

const mul=(a,b)=>a*b
// console.log(mul(10,20))

const div=(a,b)=>a/b
// console.log(div(10,20))

const hof=(a,b,task)=>{
    return task(a,b)
}
console.log(hof(10,20,add))
console.log(hof(10,20,sub))
console.log(hof(10,20,mul))
console.log(hof(10,20,div))