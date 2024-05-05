//! spread parameter
//* Arrays
//@ coping elements from one array to another
// let arr1=[1,2,3,4,5]
// let arr2=[...arr1,6,7,8,9]
// console.log(arr2)

//@ combining two or more arrays
// let arr1=[1,2,3,4,5]
// let arr2=[6,7,8,9]
// let arr3=[...arr1,...arr2]
// console.log(arr3)


//@ spread operator can be placed anywhere in the array
// let arr1=[1,2,3,4,5]
// let arr2=[6,7,...arr1,8,9]
// console.log(arr2)

//* Objects
//@ copying properties from object into another
// let obj1={
//     empid:100,
//     empName:"nag"
// }
// let obj2={
//     empsal:120000,
//     empRole:"software Engineer"
// }
// let obj3={
//     ...obj1,
//     ...obj2
// }
// console.log(obj3)


//! rest parameter
function display(a,b,c,...rest){
    console.log(a,b,c,rest)
}
display(10,20,30,40,50,60)