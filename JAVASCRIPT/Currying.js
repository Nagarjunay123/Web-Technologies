//! function with multiple arguments

function add(a,b,c){
    return a+b+c;
}
console.log(add(10,20,30));

//! function currying
function add1(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(add1(10)(20)(30));

let a=a=>b=>c=>a+b+c;
console.log(a(10)(20)(30));