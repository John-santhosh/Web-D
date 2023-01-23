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

// let playerOne="rock";
// let computer="rock";

// switch(playerOne){
//     case computer : 
//     console.log("tie game");
//     break;
    
//     case "rock":
        
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



a=10
console.log(a)
let a= 5;


// console.log(typeof [1,2,3])

// const calculator = require('./calc')

// calculator.addition(2,3)




