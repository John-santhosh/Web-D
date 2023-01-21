let num1=Number(prompt("Enter a number"));
let num2=Number(prompt("Enter a number"));
// totRes() // comment the top steps and try this  
document.getElementById("num1-el").innerText=num1
document.getElementById("num2-el").innerText=num2
let sumTot=document.getElementById("sum-el")
let reSetBtn=document.getElementById("reset")
let totVal=document.getElementById("again")

function totRes(){
    num1=Number(prompt("Enter a number"));
    num2=Number(prompt("Enter a number"));
    document.getElementById("num1-el").innerText=num1
    document.getElementById("num2-el").innerText=num2
}

function add(){
    sumTot.innerText= "Addition:"
    let addEl= num1+num2;
    sumTot.innerText+=addEl;
}
function sub(){
    sumTot.innerText= "subtraction:"
    let subEl= num1-num2;
    sumTot.innerText+=subEl;
}
function multiply(){
    sumTot.innerText= "Multiplication:"
    let multiEl= num1*num2;
    sumTot.innerText+=multiEl;
}
function div(){
    sumTot.innerText= "Division:"
    let divEl= num1/num2;
    sumTot.innerText+=divEl;
}

function reSet(){
    let reSet=sumTot.innerText= "Perform a operation:"

}


