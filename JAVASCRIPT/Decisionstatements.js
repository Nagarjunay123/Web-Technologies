//! if
// let day="Monday"
// if(day=="Monday"){
//     console.log("Today is Monday");
// }

// !if-else
// let day = "Tuesday"
// if(day=="Monday"){
//     console.log("Today is Monday");
// }
// else{
//     console.log("Today is Not Monday");
// }

// !Else-if ladder
// let day = "saturday";
// if(day=="Monday"){
//     console.log("Today is Monday");
// }
// else if(day=="Tuesday"){
//     console.log("Today is Tuesday");
// }
// else if(day=="Wednesday"){
//     console.log("Today is Wednesday");
// }
// else{
//     console.log("Today is Holiday");
// }

//! Switch case
// let animal="tiger"
// switch(animal) {

//     case "lion":
//         console.log("It is a lion");
//         break;
//     case "dog":
//         console.log("It is a dog");
//         break;
//     case "cat":
//         console.log("It is a cat");
//         break;
//     case "tiger":
//         console.log("It is a tiger");
//         break;
//     default:
//         console.log("It is not the Animal");
// }


//Switch case example2
let amount = 400;
switch(true) {
    case(amount>300 && amount<=400):
        console.log("can try different mutton biryani");
        break;

    case(amount>200 && amount<=300):
        console.log("can try different chicken biryani");
        break;

    case(amount>100 && amount<=200):
        console.log("can try different veg biryani");
        break;

    default:
        console.log("you don't have a sufficient amount");
}