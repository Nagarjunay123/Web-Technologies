//! String by using literals
// let a="nag"
// let b='nag'
// let c="n"
// let d='n'
// let e="21"
// let f=""
// let g=" "

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);

//! String by using constructor objects

// let x=new String("nag")
// console.log(x);
// console.log(typeof x);


//!Accessing using index values
// let a="Nagarjuna";
// console.log(a)
// console.log(a[0])
// console.log(a[8])
// console.log(a[-1])


//! length
// let a="Nagarjuna";
// console.log(a.length)
// console.log(a[a.length-1])


//! String Inbuild methods
//@ toUpperCase
// console.log(a.toUpperCase())

//@ toLowerCasse
// console.log(a.toLowerCase())

//@ charAt(indexvalue)
// console.log(a.charAt(2));
// console.log(a.charAt(5));
// console.log(a.charAt(-2));

//@ charCodeAt()
// let b=a.charCodeAt(1)
// console.log(a.charCodeAt(1))

// @replace("old characters","new characters")
// let a="this fruit is world's sweetest fruit in the world"
// let b=a.replace("fruit","person")
// console.log(b)

//@replaceAll("old characters","new characters")
// let c="this fruit is world's sweetest fruit in the world"
// let d=a.replaceAll("fruit","person")
// console.log(d)

//@ repear(no.of times)
// let a="nag"
// console.log(a.repeat(2))

//@ trimStart(),trimEnd() and trime()
// let a="            nagarjuna               "
// let result1=a.trimStart();
// console.log(result1)

// let result2=a.trimEnd();
// console.log(result2)

// let result3=a.trim();
// console.log(result3);

//! concat(String1,String2,String3)

// let string1="hello"
// let string2="good"
// let string3="morning"
// console.log(string1.concat(" ",string2," ",string3))

//@toString()
// let s="nag"
// console.log(s)
// console.log(typeof s)

// let s1=new String("nag")
// console.log(s1)
// console.log(typeof s1)

// let s2=s1.toString()
// console.log(s2)
// console.log(typeof s2)


//@ includes()
// let a="hello good morning"

// console.log(a.includes("hello"))
// console.log(a.includes("Hello"))
// console.log(a.includes("orning"))

//@ startsWith(String,[position index value])
// let a="hello everyone good morning"
// console.log(a.startsWith("hello"));
// console.log(a.startsWith("Hello"));
// console.log(a.startsWith("every",6));

//@ endsWith(String,[position index value])
// let a="hello everyone good morning"
// console.log(a.endsWith("ing"))
// console.log(a.endsWith("good",18))
// console.log(a.endsWith("good",19))

//@ indexOf(String,[position index value])\
// let b="hello everyone good morning hello"
// console.log(b.indexOf("hello"))
// console.log(b.indexOf("good"))
// console.log(b.indexOf("randomword"))
// console.log(b.indexOf("hello",4))
// console.log(b.indexOf("hello",-3))// if give any negative value it will consider as a 0

//@ lastIndexOf(String,[position index value])
// let b="hello everyone good morning hello"
// console.log(b.lastIndexOf("good"))
// console.log(b.lastIndexOf("hello"))
// console.log(b.lastIndexOf("random"))
// console.log(b.lastIndexOf("hello",4))
// console.log(b.lastIndexOf("hello",-3))

//@ slice()
// let a="hello everyone good morning hello"
// console.log(a.slice(1));
// console.log(a.slice(9));
// console.log(a.slice(1,9));
// console.log(a.slice(0,-9));
// console.log(a.slice(14,3));

//@ split()
// let a="hello everyone good morning hello"
// console.log(a.split(" "));
// console.log(a.split("o"));
// console.log(a.split(""));
// console.log(a.split("nag"));
// console.log(a.split(" ",2));
// console.log(a.split("",5));


//@ substring(startIndex, endIndex)

// let a="Good morning stupid fellow"
// console.log(a.substring(2))
// console.log(a.substring(2,4))
// console.log(a.substring(4,4))
// console.log(a.substring(0,5))
// console.log(a.substring(10,5))
// console.log(a.substring(4,-4))

//@ substr(startIndex,length)
let a="Hello"
console.log(a.substr(1))
console.log(a.substr(3))
console.log(a.substr(3,3))
console.log(a.substr(1,1))
console.log(a.substr(3,1))
console.log(a.substr(4,-4))
console.log(a.substr(-1,4))
console.log(a.substr(-2,2))
console.log(a.substr(-2,4))
console.log(a.substr(-2,-4))
console.log(a.substr(-4))