function outer (arg1) {

    let var1=10

    function inner(arg2) {
        let var2=20
        console.log(arg1,var1,arg2,var2)
    } //fun in fun

    return inner //outer return inner 
} 

let x = outer('param1')  //so x has inner fun feel
//here typeof of x is function
x('param2') 

//OBJECTS IN JS

let obj = {

    a: 10,  //, give note imm
    b: 'hello',
    c: function() {
        console.log(this) //this here points to ob itself
    },
    e: {
        l:234,
        m:'sdd' //obj ke andar obj yes imm
    }
} //NOTE THE SYNTAX NEVER COMPARE JS FROM OTHER LANGUAGES IMM


//STRING LITERALS IN JS

let s1 = "'hi'" //js always seees " "  this ,'' nhi

let s2 ="this is a \n multiple line string"

let s3 = `this 

is also multiole line string

`
let s4 = `good moring ${s3}` //` used in usefl hai ${} varible concat


//equality


console.log('false' == false) //false hai since == case me number me convert both ko then check so string in no. is Nan so feel IMMMM
//INHERTANCE IN JS

let obj1 ={
    z:10,
    x:20
}

let obj2 = Object.create(obj1)  //prototype inheritance in js

//__proto__ banta hai when obj is created through Object.create() 






 