function Person(name,age) {
    this.name = name
    this.age = age
    
}

let p = Person('adarsh kumar',19) //new not used , if used brfore a function then it runs in a new scope
console.log('p = ' + p) //p is a fucnction so return 10
console.log(name)  //conact with + feel
console.log(age)

//we inherit objects to object in js not class
 
let a = {p:10, q:'hey',r:true} //a is an object note immmmm 

let b = Object.create(a)

let c = Object.create(b) //c inherit from b 


console.log(a)
console.log(b) //b is now an empty obj but we can still access its attritbutes imm

console.log(b.q) ///NOTE JS INHERITSNCE 

console.log(c.q) //c b se herit so access yes 
b.q = 'ok changed' //VERY IMM OOPS IN JS , when b.q = "did" is wriiten it creates the attribute in that obj so visible feel

console.log(b) //NOTE B HAS THE CHANGES VISIBLE ONLY SHOWN THAT ONLY

console.log(c.q)

//string,number,function are inherited from Object prototype


///new synatx in js es6 classes so use it immm
//like c++ etc only


class Adarsh {
    constructor(color,name) {  //constructor note 
        this.color = color
        this.name = name
    }
}
let e = new Adarsh('red','ok') //new alays yes know 

class Adarsh extends Hey {
    
}





