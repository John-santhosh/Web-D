// 'use strict'
// let maxe=280;
// let tweet=prompt("Write your message here ..")
// let len=tweet.length
// let c= maxe-len;
// let left=
// alert("you have written "+ len + "characters ,you have" + c + "characters left "   )
// len =tweet.slice(0,140)
// alert(len)
// console.log(len)


// let name=prompt("what is your name");
// let modName=name.slice(0,1).toUpperCase()
// alert("hello , " +modName + name.slice(1,10) + ".")

// prompt("enter")
// let myName="santhosh";
// console.log(myName.charAt(5 ))

// let myFloat=42
// const myString="42";
// console.log(myFloat===+myString);
// var new2 = "33 123adc  44" ;
// console.log(Number.parseFloat(new2));
// let num3=45.223421;
// console.log(Number(num3.toFixed(3)))


// displaying a random letter form the given name 


// let ranName= prompt("Enter your name")

// let len= ranName.length;
// let ra=Math.random();
// // console.log("this is random"+ra)
// // console.log(len +"*"+ ra)
// let random= Math.floor((ra*len));
// // console.log(len)
// // console.log(random)
// console.log("A random letter from "+ ranName + " : " + ranName.charAt(random));

// console.log(ranName.charAt(Math.floor(Math.random()  *len)))



// conditional : if case 


// if(player1 === computer)
// {
//     //tie game!
// }else if(player1==="rock"){
//     if(computer==="paper"){
//         //computer wins
//     }
// }
// else if(player1==="paper"){
//     if(computer==="scissors"){
//         //computer wins
//     }
// }
// else if(player1==="scissors"){
//     if(computer==="rock"){
//         //computer wins
//     }
// }

//conditional: Switch Statements 

//syntax
// switch (Math.round(Math.random() *5 + 1)){
//     case 1 : console.log(1);
//     break;
//     case 2 : console.log(2);
//     break;
//     case 3 : console.log(3);
//     break;
//     case 4 : console.log(4);
//     break;
//     default: console.log("No Match");
// }



let obj10 ={
    name : "john",
    secondName : "santhosh",
    age: "20"
}


// console.log(obj10[age] )

let arr =[1,2,3,4,5,6,7,8,9];
console.log(arr)
arr=arr[4]=30;
console.log(arr)
// arr=arr[arr.length]=arr[5]+

// console.log(arr)
 let colors =["red", "green", "yellow", "orange"]

 //----------------------------
//The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
for (var [color,index] of colors.entries()){
    console.log(color ,"->" ,index)
    // console.log()
}

str =["red", "green", "yellow", "orange"] 

for (var color of str){
    console.log(color)
}

let num1=2;
let num2=00002;
if(num1===num2)
 console.log("true");
else
 console.log("false");

var x=5; 

console.log(x + " " + y)
var y=10
console.log (x + " " + y)

console.log((18 == { age: 18 }))

num1=3;
function cal() {
num1=6;
num2=5;
num3=num2*num1;
console.log(num3);
}
cal();
// What is the output of the following code?
function Add(){
    console.log(answer)
    var answer = 2
};
Add()

function fn(){
    let num45=5;
    console.log(num45)
   }

   fn()
//    console.log(num45)

   if (true){
    let num40=30;
    console.log(num40)
   }
let num40;
   console.log(num40)
// let  num40=30;

console.log(typeof 4+5,typeof "6")

//destructuring an object 

let myObj={
    name: "john",
    age: 25,
    gender: 'f',
    address : {
        country : "England",
        city: "London"
    }
}

let {name , age , gender,address:{country,city}}=myObj
console.log(name)
console.log(city)



// a=10
// console.log(a)
// let a= 5;


// console.log(typeof [1,2,3])

// const calculator = require('./calc')

// calculator.addition(2,3)

//imperative  way of writing code 

let inpNum=3
let checkSqrt = givenNumb => {
    let sqr= givenNumb**2;
    console.log(`sqr of ${givenNumb} is  ${sqr}`)
    if (sqr%2==0){
        console.log(`${sqr} is even Number`)
    }else{
        console.log(`${sqr} is odd Number`)
    }
}

checkSqrt(inpNum)
//declarative way of writing code 

const checkForSquare =(h) => (h**h%2===0 ? ("is true") : false)

console.log(checkForSquare(6)) 


const retRes = ()=> {
    
}

// callback function as a argument 
let  isEven=n=>n%2==0

let  printFirstName=(evenFun,num)=>{
    const isNumEven= evenFun(num)
    // let a=cb(san)
    console.log(`The number ${num} is an Even number ${isNumEven}`)

}

printFirstName(isEven,10)


let funFullName =(fName,lName)=>{
    fName=fName("john1");
    lName=lName("santhosh2")
    // console.log()
    console.log (fName,lName)
}

let firstNme= (firName)=>{
    // firName= "john1"
    return firName
}
let lastName= (laName)=>{
    // laName= "santhosh2"
    return laName
}

funFullName (firstNme,lastName) // passing 2 functions as a arguments 

//higher order function 
let arrs=[1,2,3,4,5]

// let arr1=[];
// for (ar of arrs){
//     arr1.push(ar*ar)
// }console.log(arr1)

const sqaredNum= arrs.map(function(n){return n*n})

console.log(sqaredNum)

const transaction = [1000, 3000 , 4000,2000, -898, 3800, -4500]
const intoDollar =80;

const convertToDol = transaction.map((amt)=>{
    return (amt/intoDollar).toFixed(0)
})

console.log(convertToDol)

let convertToDol1 = transaction.forEach((amt)=>{
  return((amt/intoDollar).toFixed(0))
})

console.log("this",convertToDol1)

let firstWithDrawl= transaction.findIndex (function(n){
   return n<3000
     
})

console.log(firstWithDrawl)

let result1 = transaction.some(function(a){
    return a>0;
})
console.log(result1)

let num = [1,2,3,4,10]

// filter 
const evenNum = num.filter(function(n){
    let a =n%2==0;
    return a
})

console.log(evenNum)

const evenNum1= num.map(function(n){
    let a = n//%2;
    return a
})

console.log(evenNum1)

const filtCheck = transaction.filter((a)=>{
    return a > 0;
})

console.log(filtCheck)

// let num = [1,2,3,4,10]

let result = num.reduce(function(acc,b){
    let totalSum= acc+b;
    console.log(totalSum)
    return totalSum;
},0)

console.log(result)

//------------------------------------
// chaining methods

let  arRy= [
    {name: "A", age : 14 , gender : "M"},
    {name: "B", age : 15 , gender : "M"},
    {name: "C", age : 26 , gender : "F"},
    {name: "D", age : 36 , gender : "M"},
    {name: "E", age : 54 , gender : "F"},
    {name: "F", age : 23 , gender : "M"}
]

let males = arRy.filter(function(a){
    return a.gender=="M"
}).map(function(a){
    return a.age
})

// let ageOfMales = males.map(function(a){
//     return a.age
// })


console.log(males)
// console.log(ageOfMales)

// from transaction array filter out the positive elements and calculate the total amount 
let redm= 0;
let totalAmt = transaction.filter(function cat2(a){
    return a>redm;
}).reduce(function(acc,b){
    return acc+b
},0)

console.log(totalAmt)

let sum=0;
let arr5 = [10,15,20,30];  
arr5.forEach(function myFunction(element) {  sum= sum+element;  });  
console.log(sum);
 
// console.log(this)
// whenever we create a function inside of an object , that function is known as a method od that object 

function display1(){
    // console.log(this)
}

// console.log(display1)

let miObj ={
    name: "john",
    age : 23,
    myFun : function (){
        console.log(this)
    }
}

// miObj.myFun()

let miObj1 ={
    name: "john",
    age : 23,
    myFun : function (){
        function myFun3(){
            console.log(this)
        }
        myFun3()
    }
}

// miObj1.myFun()

var golfGames = {
    tournament: "The Masters",
    players:
    [
      {name:"T. Woods", age:37},
      {name:"P. Mickelson", age:43}
    ],
    showAllGames: function () {
      currObject = this;
      this.players.forEach (function (player) {
        console.log(player.name + ' is playing at ' + currObject.tournament);
      })
    }
  }
//   golfGames.showAllGames();

  function createCar(_name, _company , _color){
    this.name=_name;
    this.company=_company;
    this.color= _color;

    this.drive = function (){
        console.log(`I am driving ${this.name}`)
    }
    
  }
 let car1 = new createCar("X4", "BMW" , "red");
 console.log(car1)
 car1.drive()

let initNum = 1;

do {
    if(initNum%2==0){console.log(initNum)}
    initNum++ 
    break;
    
      
}while (initNum<=10){

}
console.log(initNum)

// ----------------------
// inheritance 

class Person {
    constructor(_name, _age){
    this.name= _name;
    this.age= _age;
    }
}

class Teacher extends Person{
    constructor(_nam, _ag,classStrength){
        super()
        this.classStrength= _classStrength;
    }
}
let person1 = new Person("john",22)
console.log(person1)

