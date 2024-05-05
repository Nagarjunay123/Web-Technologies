//!Global scope
/* var a=10;
let b=20;
const c=30;

console.log("--Global varbles--")
console.log(a);
console.log(b);
console.log(c);
function display() {
    console.log("--inside function --")
    console.log(a);
    console.log(b);
    console.log(c);
}
display();
{
    console.log("--inside block --")
    console.log(a);
    console.log(b);
    console.log(c);
} */

//!function scope
// function scope() {
//     var a=10;
//     let b=20;
//     const c=30;

//     console.log("--inside function--")
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// scope();

// console.log("--outside function and outside block --")
// console.log(a);
// console.log(b);
// console.log(c);
// {
//     console.log("--inside block --")
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

//!Block scope
{
    var a=10;
    let b=20;
    const c=30;
    
    console.log("--inside block --")
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log("--outside block and outside function--")
    console.log(a);
    // console.log(b);
    // console.log(c);

function scope() {
    
    console.log("--inside function--")
    console.log(a);
    console.log(b);
    console.log(c);
}
scope();