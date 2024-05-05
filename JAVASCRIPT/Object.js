//! Object literals
// let details ={
//     name:"nag",
//     age:22,
//     isMarried:null,
//     isEmploye:false,
//     fun:function(){
//         console.log("hello")
//     },
//     skills:{
//         frontend:"webtechnologies",
//         backend:"java",
//         database:"mysql"
//         }
// }
//! Accesing Object Values

//* 1) Dot Notation
// console.log(details.name)
// console.log(details.age)
// console.log(details.isMarried)
// console.log(details.isEmploye)
// details.fun()
// console.log(details.skills.frontend)

//* 2) Box Notation
// console.log(details["name"])
// console.log(details["age"])
// console.log(details["isMarried"])
// console.log(details["isEmploye"])
// details["fun()"]//-- disadvantage
// console.log(details["skills"]["frontend"])

//! Creating Object using Object constructor
// let data=new Object();
// data.name="nag"
// data.age=22
// data.isMarried=false
// data.isEmploye=false
// data.fun=function hello(){
//     console.log("hello")
// }
// console.log(data)
// data.fun()

//! Array of objects
// let arr=[
//     {
//         id:1,
//         name:"nag"},
//     {
//         id:2,
//         name:"om"
//     },
//     {
//         id:3,
//         name:"vijay"
//     }
// ]
// console.log(arr[0].id)
// console.log(arr[0].name)
// console.log(arr[1]["name"])
// console.log(arr[1]["id"])
// console.log(arr[2]["name"])
// console.log(arr[2]["id"])

//* iterating over Array of objects
// arr.map((element)=>{
//     console.log(element.name)
// })

//! Dealing with const keyword
//! Array
//@ reassigning individual values is possible
// const arr=["something","nothing","anything"]
// console.log(arr)
// arr[2]="everything"
// console.log(arr)

//@ reassigning entire values is not possible
// arr=["some","not","any"]


//! Object
//@ reassigning individual values is possible
// const obj={
//     name: "something",
//     age:100
// }
// console.log(obj)
// obj.name="nag"
// console.log(obj)

//@ reassigning entire values is not possible
// obj={
//     name:"om",
//     age:222
// }

//! Object property and methods
// let obj={
//     name: "something",
//     age:100,
//     place:"somewhere"
// }

//* delete
// console.log(obj)
// delete obj.place
// console.log(obj)
// delete obj.age
// console.log(obj)

//* keys()
// console.log(Object.keys(obj))

//* values()
// console.log(Object.values(obj))


//* entries()
// console.log(Object.entries(obj))
// console.log(Object.entries(obj).flat())

//* assign(object,any)

//@ converting array to object
// let arr=["mon","tues","wed"]
// console.log(arr)
// let output=Object.assign({},arr)
// console.log(output)

//@ copying the values of one object into another
// let obj={
//     name:"nag",
//     age:22,
//     place:"kmm"
// }
// console.log(obj)
// let output2=Object.assign({},obj)
// console.log(output2)

//! seal()
let obj={
        name:"nag",
        age:22,
        place:"kmm"
      }
console.log(obj)
// Object.seal(obj)

//@ Adding new property is not possible
// obj.salary=20000
// console.log(obj)

//@ Deleting property is not possible
// delete obj.name
// console.log(obj)

//@ Modifing existing property is possible
// obj.age=23
// console.log(obj)



//! freeze()
Object.freeze(obj)
//@ Adding new property is not possible
obj.salary=20000
console.log(obj)

//@ Deleting property is not possible
delete obj.name
console.log(obj)

//@ Modifing existing property is not possible
obj.age=23
console.log(obj)