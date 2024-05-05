//console.log(Math)

//! PI
// console.log(Math.PI)

//! max()
// console.log(Math.max(10,20,3))
// console.log(Math.max(10,-20,3))

//! min()
// console.log(Math.min(10,20,-30))
// console.log(Math.min(-10,20,30))

//! ceil()
// console.log(Math.ceil(5.5))
// console.log(Math.ceil(5.01))
// console.log(Math.ceil(5.9))

//! floor()
// console.log(Math.floor(4.3))
// console.log(Math.floor(4.99))
// console.log(Math.floor(4.03))

//! sign()  -- if it is negative number it returns -1 else 1
// console.log(Math.sign(-5))
// console.log(Math.sign(500))
// console.log(Math.sign(-0))
// console.log(Math.sign(0))

//! trunc()-- it remove the decimal values
// console.log(Math.trunc(4.5))
// console.log(Math.trunc(4.5997))
// console.log(Math.trunc(7.995))

//! abs() -- it negative values to positive values
// console.log(Math.abs(-10))
// console.log(Math.abs(-10.5))
// console.log(Math.abs(10))

//! round()
// console.log(Math.round(5.9))
// console.log(Math.round(5.4))
// console.log(Math.round(5.5))

//! pow(base, exponent)
// console.log(Math.pow(2,3))
// console.log(Math.pow(2,5))
// console.log(Math.pow(2,10))

//! sqrt()
// console.log(Math.sqrt(4))
// console.log(Math.sqrt(9))
// console.log(Math.sqrt(25))
// console.log(Math.sqrt(23))
// console.log(Math.sqrt(-25))

//! cbrt()
// console.log(Math.cbrt(4))
// console.log(Math.cbrt(8))
// console.log(Math.cbrt(125))
// console.log(Math.cbrt(-125))

//! sin(), cos(), tan()
// let convertedToDegree=Math.PI/180
// console.log(Math.sin(0*convertedToDegree))
// console.log(Math.sin(90*convertedToDegree))
// console.log(Math.sin(45*convertedToDegree))

// console.log(Math.cos(0*convertedToDegree))
// console.log(Math.cos(90*convertedToDegree))
// console.log(Math.cos(45*convertedToDegree))

// console.log(Math.tan(0*convertedToDegree))
// console.log(Math.tan(90*convertedToDegree))
// console.log(Math.tan(45*convertedToDegree))

//! random()
// let random=Math.random()
// console.log(random)
//@ if we want random numbers from 0 to 10 we need to multiply them by 10
let a=Math.random()*10
console.log(a)
console.log(Math.trunc(a))
console.log(Math.round(a))
console.log(Math.floor(a))
console.log(Math.ceil(a))