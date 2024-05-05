//! Call()
let obj1={
    firstname:"virat",
    lastname:"kohli",
    fun:function(place,jersey){
        console.log(`my full name is ${this.firstname} ${this.lastname} and i'm from ${place} and my jersey number is ${jersey}`);

    }
}
// obj1.fun("banglore",18)

let obj2={
    firstname:"ms",
    lastname:"dhoni",
}
// obj1.fun.call(obj2,"chennai",7)

//! Apply()
let obj3={
    firstname:"dinga",
    lastname:"dingi",
}
// obj1.fun.apply(obj3,["austraila",1])

//! bind()--it return the function
let obj4={
    firstname:"nag",
    lastname:"arjuna",
}
let output1=obj1.fun.bind(obj4,"khammam",7)
// console.log(output1)
// output1()
let output2=obj1.fun.bind(obj3,["hyd",9])
output2()