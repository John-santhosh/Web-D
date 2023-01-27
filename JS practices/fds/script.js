'use strict'
// Write a program to print Factorial of any number

function factorial(number){
let result=1;
for (let i=1; i<=number; i++){
    result = result *i;
}
return result
}
// console.log(factorial(8))

// ----------------------------------------
// Write a program in JAVASCRIPT to print Fibonacci series.

const fibonacci =(number)=>{
let result =[];
let x =0,y=1;
if (number<=1){
    result.push(x);
    return result;
}else if(number===2){
    result.push(x,y);
    return result;
}else{
    result.push(x,y)
    for (let i=2 ; i<number;i++){
        result.push(result[result.length-1]+result[result.length-2]);
    }
    return result;
}
}
// console.log(fibonacci(10))


// ---------------------------------------
// Write a program to find whether a number is Armstrong or not

// definition ">> An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371

// console.log("this",Math.floor(4371/10),371%10)
// console.log("this",Math.floor(437/10),437%10)
// console.log("this",Math.floor(43/10),43%10)

let armstrong= function (number){
// for (let j = 1 ; j<=9999; j++){ // to check arm for a sequence of number 
// let number= 371;
let arm= number;
let numLen = String(number).length;
let result= 0;

for (let i=1 ; i<=numLen; i++){
    let quo = Math.floor(number / 10);
    let rem = number % 10;
    result+=rem**3;
    number= quo;
}
if(result==arm){
    console.log(`${arm} is a armstrong number `)
}
// }
}
// armstrong(371)

// same program using do while 

// let num = 371;
// let num2 = num;
// let arm =0;
// do {
//     let rem = num%10
//     let result = rem**3;
//     arm += result;
//     num=Math.floor(num/10)
// }while(num>0);

// if (num2 === arm){
//     console.log(`${arm} is a armstrong number `)
// }


// ----------------------------------------------
// Write a program to print Reverse of any number

// let num = 9876754321;

// console.log(revNum(9876543)) // invoking 

function revNum(num){
let result=0;
do{
    let rem = num%10;
    result= result+String(rem);
    let quo = Math.floor(num/10);
    num=quo;
}while(num>0) // 7234 > 0

return Number(result)
}

// ----------------------------------------- 
// Program to find whether a year is LEAP year or not

console.log(leapYear(2362)) //invoking 
function leapYear(num){
    // for (let i=1; i<=num;i++)
if (num%4==0 || num%100!=0 && num%400==0){
    return (`${num} is a leap year`);
}else{
    return (`${num} is a common Year`);
}
}

//--------------------------------------------------
// To check whether a number is Prime or not.


// primeNum(20) //invoking 

function primeNum(limit){
    for (let num=2; num<limit; num++){
        let prime = true;
        for(let i=2 ;i<num; i++){
        if (num%i==0){
            // console.log(`${num} is not a prime num`);
            prime=false;
        }
        }if(prime==true){
            console.log(`${num} is prime`)
        }
    }
}

// patter 1 
document.write("<br>")
document.write("patter 1")
document.write("<br>")
document.write("<br>")

for (let i=1; i<=5; i++){
    for ( let j=1; j<=i;j++){
        document.write("* ")
    }document.write("<br>")
}

// patter 2

document.write("<br>")
document.write("patter 2")
document.write("<br>")
document.write("<br>")

for (let i=1; i<=5; i++){
    for ( let j=1; j<=i;j++){
        document.write(j + " ")
    }document.write("<br>")
}


// patter 3
document.write("<br>")
document.write("patter 3")
document.write("<br>")
document.write("<br>")

for (let i=5; i>0; i--){
    for (let j=1; j<=i; j++){
        document.write(j + " ")
    }
    document.write("<br>")
}

document.write("<br>")
document.write("patter 4")
document.write("<br>")
document.write("<br>")


for (let i=5; i>0; i-- ){
    for (let j=0; j<i; j++){
        document.write("* ")
    }
    document.write("<br>")
}