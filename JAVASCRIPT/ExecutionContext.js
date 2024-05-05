// var a=10;
// let b=20;
// const c=30;

// function hello(){
//     console.log(a+b+c)
// }
// hello();

//! Example :1
console.log("Starting");
function outer(){
    console.log("outer function");
    let a=10;
    let b=20;
    function inner(){
        console.log("inner function");
        let c=30;
        console.log(a+b+c);
    }
    inner();
}
outer();