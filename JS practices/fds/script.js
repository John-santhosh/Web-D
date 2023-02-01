'use strict'
// Write a program to print Factorial of any number

function factorial(number){
let result=1;
for (let i=1; i<=number; i++){
    result = result *i;
}
return result
}
// console.log(factorial(8)) //invoking 

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
// console.log(fibonacci(10)) //invoking 


// fibonacci not using array 

let fibon = function (num){
    if (num<=1) console.log(0);
    else if (num===2){
        for (let i=0; i<=1;i++){
            console.log(i)
        }
    }else{
        console.log(0)
        console.log(1)
        let result= 0
        let a=0 // a= 1 // a = 1 
        let b=1 //b= 1 ; // b = 2 
        for (let i=1; i<=num; i++){
            result= a+b; //res 1 
            console.log(result)
            a= b; 
            b= result; 
        }
    }
}
// fibon(6) //invoking 

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
// armstrong(371) //invoking 

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

// console.log(leapYear(2362)) //invoking 
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


// to print all prime number upto a specific limit 

// primeNums(20) //invoking 

function primeNums(limit){
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

// for check a particular number is prime or not 

function primeNum(num){
        let prime = 1;
        for(let i=2 ;i<num; i++){
        if (num%i==0){
            console.log(`${num} is not a prime number`);
            prime=0;
            break; // 
        }
        }if(prime==1){
            console.log(`${num} is prime`)
        }
    }

// primeNum(20) //invoking

// -----------------------------------------
// patter 1 

document.write("<br>")
document.write("patter 1")
document.write("<br><br>")

function pattern1(){
    for (let i=1; i<=5; i++){
        for ( let j=1; j<=i;j++){
            document.write("* ")
        }document.write("<br>")
    }
}

// pattern1()  //invoking

// -------------------------------------------
// patter 2

document.write("<br>")
document.write("patter 2")
document.write("<br><br>")

function pattern2(){
    for (let i=1; i<=5; i++){
        for ( let j=1; j<=i;j++){
            document.write(j + " ")
        }document.write("<br>")
    }
}

// pattern2() //invoking 

// ----------------------------------------------
// patter 3
document.write("<br>")
document.write("patter 3")
document.write("<br><br>")

function patter3(){
    for (let i=5; i>0; i--){
        for (let j=1; j<=i; j++){
            document.write(j + " ")
        }
        document.write("<br>")
    }
}
// patter3() //invoking

// -------------------------------
// pattern 4

document.write("<br>")
document.write("patter 4")
document.write("<br><br>")

function pattern4(){
    for (let i=5; i>0; i-- ){
        for (let j=0; j<i; j++){
            document.write("* ")
        }
        document.write("<br>")
    }
}

// pattern4() //invoking 

// ---------------------------------------
// 10. Write a program to find factor of any number
// 

// function evenDiv(num,divNum){
//     if(num%divNum===0){
//         return divNum
//     }
// }


// console.log(factorCheck(10)) //invoking 

function factorCheck(num){
let result=[];
let a
for(let i=2; i<num;i++){
    if(num%i==0){
        result.push(i)
    }
}
return (result)
}



function factorCheck1(num){
for(let i=2; i<num;i++){
    if (num%i==0){
        console.log(i) 
    }
}
}
// factorCheck1(40)

// --------------------------------------
// 11. Write a program to find table of a number

// the "table" -parameter  denotes which table you want , "limit" -parameter  denotes how times the table you want

function multiply(num1,num2){
    return num1*num2;
}

let tables = function(table,limit){
    for (let i=1; i<=limit;i++){
        console.log(`${table} * ${i} = ${multiply(table,limit)}`);
    }
}
// tables(9,15) //invoking

// ------------------------------------------
// 15 patter 5

document.write("<br> pattern 5 <br> <br>")

// patter5(6,7) //invoking

function patter5(row,cols){
for (let i=1; i<=row; i++){
    for (let j=1; j<=cols ; j++){
        document.write("* ")
    }document.write("<br>")
}
}

// -------------------------------------------------
// 12. Write a Program to swap two numbers in JAVASCRIPT

function swap(x,y){
    console.log(`Before swap : x is ${x} , y is ${y}`)

    let z=x;
    x=y;
    y=z;
    console.log(`After Swap : x is ${x} , y is ${y}`)
}

// swap(20,40) //invoking 

// ----------------------------------
// 13. Write a Program to swap two numbers in JAVASCRIPT without using third variable.

function swapAlone(x,y){
    console.log(`Before swap : x is ${x} , y is ${y}`)
x = x+y;
y= x-y;
x=x-y;
console.log(`After Swap : x is ${x} , y is ${y}`)
}

// swapAlone(20,30) //invoking 

