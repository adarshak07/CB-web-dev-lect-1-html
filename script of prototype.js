let str = 'asdd'
let obj = {a:1,b:'dsds'} //2 level from null

let fun = function() {
    console.log('yay')
}
console.log(typeof String) //a function which creates string 


//proto ie waha se inherit hua hai

class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }

    isAdult() {
        return this.age >= 18
    }
}

let p1 = new Person('john',22)

//inheritnace super keyword see imm

class Student extends Person {
    constructor(name,age,grade) { //note pahle ka bgi write

    super(name,age) //super must pahle
    this.grade=grade //see immm 
}
}

let s1=new Student('adarsh',19,5)


 
