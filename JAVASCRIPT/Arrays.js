//! Storing multiple data using variables
// let name="nag"
// let age=22
// let place="khammam"
// let gender="male"
// console.log(name)
// console.log(age)
// console.log(place)
// console.log(gender)

//! Array by literal way
// let detail=["nag", 22, "khammam", "male"]
// console.log(detail)

// console.log(detail[0])
// console.log(detail[1])
// console.log(detail[2])
// console.log(detail[3])
// console.log(detail[4])

//! Array constructor object
//@ Directly paasing array elements
// let arr=new Array("nag", 22, "khammam", "male")
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

//@ Specified the size of the array
// let arr1=new Array(3)
// console.log(arr1)
// console.log(arr1.length)
// arr1[0]="nag"
// arr1[1]=22
// arr1[2]="male"
// arr1[3]="khammam"
// console.log(arr1.length)
// console.log(arr1)

//! typeOf Array
// let detail=["nag", 22, "khammam", "male"]
// let arr=new Array("nag", 22, "khammam", "male")

// console.log(typeof detail)
// console.log(typeof arr)

//!Multidimensional Array / Nested Arrays
// let arr=[
//     ["nag", 22, "khammam", "male"],
//     ["raju",23,"hyd","male"],
//     ["rani",25,"Blr","female"] 
// ]
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[0][0]);

//! To add or remove elements of an array

// let a=["nag", 22, "khammam"]
// console.log(a)

//@ push(value1,value2, ...)--adding element at the end of the array
// a.push("male",25000)
// console.log(a)

//@ pop()--removing element at the end of the array
// a.pop()
// console.log(a)

// a.pop()
// console.log(a)


//@ unshift(value1,value2, ...)--adding element at the starting of the array
// a.unshift("male",25000)
// console.log(a)

//@ shift()--removing element at the starting of the array
// a.shift()
// console.log(a)

// a.shift()
// console.log(a)

//! toString()
// let arr=["nag", 22, "khammam"]
// let b=arr.toString()

// console.log(arr)
// console.log(typeof arr)
// console.log(b)
// console.log(typeof b)

//! at(index)
// let arr=["nag", 22, "khammam"]
// console.log(arr[0])
// console.log(arr.at(1))
// console.log(arr.at(-1))


//! concat(array1, array2,....)

// let arr1=["nag", 22, "khammam"]
// let arr2=["something", "nothing", "enough"]
// let arr3=["some","not"]

// let arr4=arr1.concat(arr2)
// console.log(arr4)
// let arr5=arr1.concat(arr2,arr3)
// console.log(arr5)

//! join(array1,array2,...)

// let arr1=["nag", 22, "khammam"]
// console.log(arr1)
// let arr2=arr1.join("*")
// console.log(arr2)
// console.log(arr1.join("-"))
// console.log(arr1.join("/"))

//! flat()
// let arr=[1,2,3,[4,[5,[6]]]]
// console.log(arr)
// console.log(arr.flat())
// console.log(arr.flat(1))
// console.log(arr.flat(2))
// console.log(arr.flat(3))
// console.log(arr.flat(Infinity))


//! slice(startIndex,endIndex)
// let arr=["idli","dosa","vada","puri"]
// console.log(arr)
// console.log(arr.slice(1))
// console.log(arr.slice(1,3))
// console.log(arr.slice(-3,3))
// console.log(arr.slice(-3,-1))
// console.log(arr)//Not affecting the original String


//! splice(startIndex,deleteCount,Values To be Inserted)

// let arr=["idli","dosa","vada","puri"]
// console.log(arr)
// console.log(arr.splice(1,1,"chetney","samber"))
// console.log(arr)
// console.log(arr.splice(1,1))
// console.log(arr)
// console.log(arr.splice(-1,2))
// console.log(arr)
// console.log(arr.splice(-2,2))
// console.log(arr)// console.log(arr.splice(-2,-2))
// console.log(arr)


//! delete
// let arr=["idli","dosa","vada","puri"]
// console.log(arr)
// delete arr[2]
// console.log(arr)
// delete arr[3]
// console.log(arr)
// console.log(arr[2])
// console.log(arr[3])

//! isArray()
// let arr=["idli","dosa","vada","puri"]
// let arr1=new Array("idli","dosa","vada","puri")
// let str="nag"
// console.log(Array.isArray(arr))
// console.log(Array.isArray(arr1))
// console.log(Array.isArray(str))


//!includes(searchElement,startIndex)
// let arr=[1,2,3,4,5]
// console.log(arr.includes(1))
// console.log(arr.includes(1,0))
// console.log(arr.includesp(1,3))


//! reverse()
// let arr=["everyone","to","hello","hi"]
// console.log(arr)
// console.log(arr.reverse())

//! sort()
// let arr1=[2,3,5,4,1]
// let arr2=[200,3,500,4,1]
// console.log(arr1.sort())
// console.log(arr2.sort())
// let arr3=["everyone","to","hello","hi","hellos"]
// console.log(arr3.sort())

//! indexOf(value,startsearching)
// let arr=["charminar","tank bund","Secratriat","DLF"]
// console.log(arr.indexOf("charminar"))
// console.log(arr.indexOf("charminar",2))
// console.log(arr.indexOf("charminar",-1))

//! lastIndexOf(value,startsearching)
// let arr=["charminar","DLF","DLF","tank bund","Secratriat","DLF"]
// console.log(arr.lastIndexOf("charminar"))
// console.log(arr.lastIndexOf("charminar",-1))
// console.log(arr.lastIndexOf("charminar",-4))
// console.log(arr.lastIndexOf("DLF",-2))



//! Higher Order Methods
//* 1)foreach(element,index,array)
// let arr=["charminar","tank bund","Secratriat","DLF"]
// arr.forEach(function(element,index,array){
//     console.log(`The element is ${element} and index is ${index} and comming from the Given Array ${array}`)
// })

//cannot return the values gives undefined
// let arr1=["charminar","tank bund","Secratriat","DLF"]
// let output=arr1.forEach(function(element,index,array){
//     return (`The element is ${element} and index is ${index} and comming from the Given Array ${array}`)
// })
// console.log(output)


//* 2)map(element,index,array)
// let arr=["charminar","tank bund","Secratriat","DLF"]
// arr.map((element,index,array)=>{
//     console.log(`The element is ${element} and index is ${index} and comming from the Given Array ${array}`)
// })

//can return the values
// let arr1=["charminar","tank bund","Secratriat","DLF"]
// let output=arr1.map((element,index,array)=>{
//     return (`The element is ${element} and index is ${index} and comming from the Given Array ${array}`)
// })
// console.log(output)

//* 3) filter(element)
// let a=[1,2,3,4,5,6,7]
// a.filter((element)=>{
//     console.log(element>3)
// })
// let output=a.filter((element)=>{
//     return (element>3)
// })
// console.log(output)


//* 4) reduce(index,array,acculator,element)
// let a=[1,2,3,4,5]
// let sum=15;
// for(let i=0; i<a.length; i++){
//     sum+=a[i];
// }
// console.log(sum)

// let output=a.reduce((accumulator,element)=>{
//     return (accumulator+=element)
// },sum)
// console.log(output)

//* 5) some() //it return true when any condition is true
let a=[1,2,,3,,4,,5]
let output1=a.some((element)=>{
    return element>3
})
console.log(output1)

//* 6) every() //it return false when any condition is false
let output2=a.every((element)=>{
    return element>3
})
console.log(output2)