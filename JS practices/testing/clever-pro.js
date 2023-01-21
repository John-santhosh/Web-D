// // food=prompt("how much was the food ?")
// // console.log("john" ,  food)

// let x=5;
// console.log( 5 !== 6); 

// adding 2 number using functions 
function sum(a,b){
    return a+b;
}

// basic tip calculator using function 

// function calculateFoodTotal (food , tip){
//     const tipPercentage= tip / 100;
//     const tipAmount= food * tipPercentage;
//     const total= sum(food, tipAmount)
//     return total; // by returning we can call this and use this function multiple times 
// }
// console.log(calculateFoodTotal (200, 10))
// console.log(calculateFoodTotal (200, 15))


/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

// function add(a,b){
//     return a+ b;
//   }
  
// const add=(a,b)=>  a+b;

// //   function sub(a,b){
// //     return a - b;
// //   }
// const sub=(a,b)=>  a-b;

// //   function div(a,b){
// //     if ((a===0) && (b===0)){
// //       console.log("cant divide by 0")
// //     }else {
// //     return a / b;    
// //     }
// //   }
// const div=(a,b)=>  {
//             if ((a==0) || (b==0)){
//               // console.log("cant divide by 0")
//               return "cant divide by 0";
//             }else {
//             return a / b;    
//             }
//           }


  
// //   function mul(a,b){
// //     return a * b;
// //   }
//   const mul = (a,b) => a*b;
//   console.log('hello from the SUM exercise')
//   /* 
//     TODO: create a function that console logs the result of any of the above operations.
//   */
// console.log(div(20,10))


// // Arrays 

// const arr=["john" , "john1", "john2"]
// console.log(arr)

// arr.push("john3")
// // console.log(arr)

// arr.push("john4")
// // console.group(arr.slice(2,4))
// // console.group(arr[1].slice(2,4))
// console.log(1)
// // console.group(arr.indexOf("john3"))

// const person = {
//   name: "john",
//   shirt: "black"
// }

// console.log(person.shirt)
// console.log(person.name)

// console.log(person['shirt'])
// console.log(person['name'])

// console.log(person)

// const person2= {
//   name: "qazi",
//   // shirt: person.shirt
//   shirt: "blue"
// }

// console.log(person2.shirt)

// const introducer =( name, shirt)=>{
//   const myObj={
//     name: name,
//     shirt: shirt
//   }
//   const intro = `hi my name is ${name} and im wearing ${shirt} color shirt .`
//   return intro;
// }

// console.log(introducer("john" , "red"));
// console.log(introducer("leo", "white"));

//creating functions inside a object

// const introducer =( name, shirt)=>{
//   const person={
//     name: name,
//     shirt: shirt,
//     assets: 100000,
//     liabilities : 50000,
//     // networth: assets-liabilities
//     // This won't get the values of assets and liabilities coz all of this will happen at the same time .
//     netWorth: function (){
//       return this.assets - this.liabilities
//     }
//   }
//   const intro = `hi my name is ${name} and im wearing ${shirt} color shirt . and my net worth is ${person.netWorth()}`
//   return intro;
// }

// console.log(introducer("john", "orange"))

// for loops 

// let a = ["john santhosh","john","john2","john5","john1","john3","john2"];

// for ( let i=0 ; i<a.length ; i++){
//   console.log(i,a[i])
// }
// for (const j of a ){
//   console.log(j)
// }

// const numbers= [1,2,3,4,5,6]

// for (let c=0 ; c<numbers.length ; c++){
//   console.log( numbers[c])
// }

// let newNum= []

// for (const number of numbers){
//   console.log(number*2)
//   newNum.push(number*2)
// }
// console.log(newNum)

const double = (numbers)=>{
  let newNum= []
  for (const number of numbers){
    newNum.push(number**2)
  }
  return newNum
}
// console.log(double([1,2,3,4,5,6]))

// for in , for of 

const howManyLetters=(phrase)=>{

  // for of (Gives the value of the index )
  // for(const letter of  phrase)
  // {
  //   console.log(letter)
  // }

  // for in (gives the index of the value )
  let result =0;
  for(index in phrase){
    console.log(Number(index)+1)
    result=Number(index)+1;
  }
  // we can return results as an object 

  return {result}//we can use this .. it will automatically gives {result: '5'}
  
  // else we can use the below 
  // return {result:result}  
  
}

  // const phrase= prompt("write your phrase")
// console.log(howManyLetters(phrase))

const phrase1 = [1,2,3,4]
// console.log(phrase1)
const sumArray =(phrase1) =>{
  let suM =0;
  for (index in phrase1 ){
    suM+=Number(index)+1;
  }
  return {suM};
}

// console.log(sumArray(phrase1))

//sumArray

const sumArra =(phrase3)=>{
  let addValue=0;
  for (index in phrase3){
    addValue= addValue+Number(index)+1;
    let output=[index]
    console.log(output)
    console.log(index)
  }
  return {addValue}
}

const phrase3=[4,3,2,1]
// console.log(sumArra(phrase3))

// finding biggest number in a array 

let numbers=[-1,2,3,4,5,5,6,7,8,9,9,-10,120]
const max= (numbers)=>{
  let result =0;
  for (const number of numbers){
    if (number > result){
      result=number
    }
  }
return {result}
}

console.log(max(numbers))

// counting occurrences of a letter 
let phrase4 ="haha";
// const letterFrequency = (phrase4)=>{
//   console.log(phrase4)
//   let myobj1={
//    "h": n=0,
//    "a": n1=0
//     }
  
//   for (const letter of phrase4){
//     console.log(letter)
//     if (letter=="h"){
//       n++;
//     }
//     else if(letter=="a") {
//       n1+=1;
//     }
//   }
// return myobj1
// }

// console.log(letterFrequency(phrase4))

const letterFrequency = (phrase4)=>{
  console.log(phrase4)

  // make a `frequency` object {}
  let frequency ={}
  for (const letter of phrase4){
    // check if the letter exist in frequency 
    if (letter in frequency){
      // increment the value by +1
      frequency[letter]+=1;
    }
    else{
      frequency[letter]=1
    }
  }
  return frequency
}
console.log(letterFrequency("haha"))
// console.log(letterFrequency("santhosh"))


let person={
  name:"john", 
  age :22,
  address: {
    city: "chennai",
    state: "tamil Nadu"
  },
  greeting: function(){
    let msg=`hi ${name} , from ${address.city}`
  }
}

  // objects by  CyberDude Networks Pvt. Ltd.

console.log("objects")
let person1={
  // key: "value"
  "name" : "john",
  "age" : 22,
  gender: "female",
  // address : "chennai , TN"
  // sibling : {
  //   brother: "peet",
  //   sister: "joes"
  // }
}

console.log("this",person1)

// person1.name= "santhosh"; // over riding the value "john" to "santhosh"
// console.log(person1)


// word frequencies in a given sentence 

const wordFrequency =(Phrase6) => {
  // let frequency ={}
  const words=phrase6.split(" ")
  return letterFrequency(words)
  
}
phrase6="john is john"
console.log(wordFrequency(phrase6))


// Write a function that takes in an array and sort the numbers inside from least to greatest

  function sortArray(array) {

    let resultArray=[];
    
    for (let arr of array ){
      console.log(" arr is ",arr)
      for(let ar  of array  ){
        console.log("ar is ",ar)
        if(ar<arr){
          resultArray=resultArray+ ar
          console.log(`${ar}<${arr}`)

        }
      }
    }
    return Number(resultArray)
  }

let arr1= [4,3,5,6,7,3];
console.log(typeof arr1,arr1)
console.log(  sortArray(arr1))
//--------------------------------------------------

// Write a function that takes a parameter (hours) and converts it to seconds

const howManySeconds = (hours) =>{
  let minute= 60; 
  let seconds =60;
  let hour=hours*minute*seconds;
  return hour;
}
let time= 24;
console.log(howManySeconds(time))

//----------------------------------------------------
// Create a function that takes the month and year (as integers)
// and returns the number of DAYS in that month

const daysInMonth = (month,year) => {
  return 
}

var getDaysInMonth = function(month,year) {
  // Here January is 1 based
  //Day 0 is the last day in the previous month
 return new Date(year, month, 0).getDate();}


 // Write a function that takes in an array of numbers and returns the largest number

 const findMax =(array) =>{
  let result = array[0];
  for (arr of array){
    if(arr>result){
      result= arr;
      }
  }
  return result;
 }

let maxie=[951,4,3,6,2,567]
console.log(findMax(maxie))