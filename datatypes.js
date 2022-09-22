
//DATATYPES
function a() {
    return 1;
}

console.log(1131,typeof 1131)
console.log(typeof true)

console.log(a,typeof a) //function are treated as a variable in js basics
//so func is also a type of datatype in js
console.log(a(),typeof a())

//FUNCTIONS
console.log(beta())
//js uses hoisting all fun are taken already
function beta() {
    return "B"
}

let gama = function() {
    return "g"
}  //but if func decalred in a var cant accss before it 
console.log(gama())

function area(height,width) {
    return height * width
}
console.log("area is", area(3,4)) 
console.log("area is", area(4))  //NaN = not a no. since it takes width as undefined 

function hello() {
    console.log("hello world"+ arguments[0] + arguments[1]) //all arguments goes to array of arguments[] feel
}
hello(" ",1,2)  //see output
hello(" hi","bye")




