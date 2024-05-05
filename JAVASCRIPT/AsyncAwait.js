// async function display(){
//     return "hello"
// }
// display().then((val)=>console.log(val))

async function print(){
    console.log("first")
    await console.log("second")
    console.log("third")
    console.log("fourth")
    
}
print()

console.log("fifth")
console.log("sixth")
