console.log("Hello, World!");

let a = 5;
a = a + 1
let b = 6;
let c = "Rudra"
let _a = "Ritu"
//var 55a="Rutu"  //invalid variable name

// console.log(a+b);
// console.log(typeof a,typeof b,typeof c)  //tells the type of variables used
{
    let a=66;
    console.log(a)  //it takes the value of a declared inside the block
}
console.log(a) //it takes the value of a from outside the var a at the top ie outside the block                                            

//const a=1;
//a=a+1;  //error because constant variable value cannot be changed

let x="rudra bhai";
let y=1;
let z=3.14;
const p=true;
let q=undefined;
let r=null; //null will also show as object in typeof

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r) 

let o={
    'name':'Rudra',
    'job':'student',
    'age':22
}

console.log(o);
o.salary=50000; //adding new key value pair to object
console.log(o);
o.salary=60000; //modifying existing key value pair to object
console.log(o);