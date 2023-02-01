
let arr33= []
console.log(arr33)
let objj = {}
console.log(objj);

let obj ={
    name: "john",
    age: 22
};
console.log(obj); // there will be a prototype is of the object .. so this prototype is by default created for an object .

function Person (_name,_age){
    this.name = _name;
    this.age=_age
    
}

Person.prototype.getNameAndAge = function(){
    console.log(this.age)
}

let person1 = new Person ("john", 23,)
let person2 = new Person ("sant", 25)
console.log(person1);
console.log(person2);

person1.getNameAndAge()

// function Const (){
//     // this.name = _name;
//     // this.age=_age
//     // // this.total=_total
//     // this.display= function (){
//     //     return "details : "+ this.name +this.age
//     // }
// }
// Const.prototype.name="john"
// let const1=new Const()
// let const2=new Const()
// console.log(const1);

// console.log(const2.display());

// function Const1= (_name,_age)
// class newConst {
//     constructor(_name,_age){
//         this.name = _name;
//         this.age=_age
//     }
// }

// let const2=new newConst("john",23)
// console.log(const2);


// class newConst1 extends newConst{
//     constructor(_name,_age,tree){
//         super(_name,_age)
//         this.tree= tree
//     }
// }

// let const3=new newConst1("john",23,"pop")
// console.log(const3);



// ----------------------------------------
//  call

let obj1 = {
    fName: "john",
    age: 22,

    printDetails: function(){
        console.log( `hi Iam ${this.fName} and ${this.age} old`)
    }

}

let obj2 = {
    fName: "santhosh",
    age: 25,

}
obj1.printDetails.call(obj2)
// console.log(obj1)
// obj1.printDetails()

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    const lydia = new Person('Lydia', 'Hallie');
    const sarah = Person('Sarah', 'Smith');
    console.log(lydia);
    console.log(sarah);

    const bird = {
        size: 'small',
       };
       
       const mouse = {
        name: 'Mickey',
        small: true,
       };
const shape = {
 radius: 10,
 diameter() {
 return this.radius * 2;
 },
 perimeter: () =>  this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());