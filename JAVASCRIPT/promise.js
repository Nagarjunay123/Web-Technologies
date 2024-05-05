let p=new Promise((resolve, reject) =>{
    let nag=false;
    if(nag){
        resolve("Promise fullfilled")
    }
    else{
        reject("promise rejected")
    }
})
console.log(p)

p.then((resolveVal)=>{
    console.log(`${resolveVal} congrats`)
})
p.catch((rejectVal)=>{
    console.log(`${rejectVal} sorry`)
})