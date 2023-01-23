// let maxe=280;
// let tweet=prompt("Write your message here ..")
// let len=tweet.length
// let c= maxe-len;

// alert("you have written "+ len + "characters ,you have" + c + "characters left "   )
// len =tweet.slice(0,14)
// alert(len)
// console.log(len)

//-------------------------
// short fot the above 

// cutting down the excess test after 140
// let tweet=prompt("Write your message here ..")
// alert(tweet.slice(0,140))


// --------------------------
// changing the case of the first letter of your name .


// let name=prompt("what is your name");
// let modName=name.slice(0,1).toUpperCase()
// alert("Hello , " +modName + name.slice(1,name.length).toLowerCase() + ".")

// -------------------------------------
// dog age to humanAge convertor

// let DogAge=prompt("Your dog age ?");
// let humanAge=((DogAge-2)*4) +21;
// alert("your dog is "+humanAge +" years old in human years .")


const getMilk =(amount,costOfMilk) =>{   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    console.log(`buy ${calcBottles(amount,costOfMilk)} bottles of milk, and bring the change`);
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    
    // return {change : amount%costOfMilk};
    // return {balance :calcChange(amount,costOfMilk)}
    return ("here is ypur change " + calcChange(amount,costOfMilk)); 
}

// calculating how many bottles we can get with this amount with arrow functions  

    const calcBottles = (startAmount, costPerBottle) => {
        var numberOfBottles=Math.floor(startAmount / costPerBottle);
        return numberOfBottles;
    }

// calculating change to return 

    const calcChange = (startAmount , costPerBottle) =>{
        var change= startAmount % costPerBottle;
        return change;
    }

// console.log(`${getMilk(5,2)}`)
// console.log(calcBottles(5,1.5)) // 3


//  BMI Calculator 

// const bmiCalculator = (weight,height) =>{
//     let meterInHeight = Math.pow(height,2);//Math.pow(height,2);
//     console.log(meterInHeight)
//     return Math.round(weight/meterInHeight);
//     // console.log  (Math.round(weight/Math.pow(height,2)));

// }

function bmiCalculator (weight, height) {
    var meterInHeight = Math.pow(height,2);
    var var1=Math.round(weight/meterInHeight);
    var var2='';
    if(var1<18.5){
        var2 = "Your BMI is "+var1+", so you are underweight.";
    }
    else if((var1>=18.5)&&(var1<=24.9)){
        var2 = "Your BMI is "+var1+", so you have a normal weight..";

    }else{
        var2 ="Your BMI is "+var1+", so you are overweight.";
    }
    return var2;
}

// console.log(bmiCalculator(80,2))


// love calculator 

// let name1= prompt("your name");
// let name2 = prompt("your mates name ");

const loveCalc = () =>  {

    let loveScore=Math.round(Math.random()*100+1);

    if (loveScore > 70){
        alert(`Your 💘 is ${loveScore}% You love each other very much`)
    } else if((loveScore >30) && (loveScore<70)){
        alert(`your 💘 score is ${loveScore}%`)
    }
    else{
        alert(`your ${loveScore}% , you are like oil and water `)
    }
}

// loveCalc()

// console.log(3400/4)
// console.log(3400%4)
// console.log(3400/100)
// console.log(3400%100)
// console.log( (3400/400))
// console.log(3400%400)
// console.log(" ")
// console.log(2004/4)
// console.log(2004%4)
// console.log(2004/100)
// console.log(2004%100)
// console.log(2004/400)
// console.log(2004%400)

const isLeap = (year) =>{
    if(year%4===0){
        if(year%100===0){
            if(year%400===0){
                return "leap year.";
            }else{
                return "Not leap year.";
            }
        }else{
            return "leap year.";
        }
    }else{
        return "Not leap year.";
    }
}

var year=1948;
// console.log(isLeap(year))

//if ((a%4===0)||(a%100!==0)&&(a%400===0))
// another method

// if ((year%4===0)||(year%100!==0)&&(year%400===0)){
//     console.log("leap year")
// }else console.log("not leap year")

// another method

// if(year%4===0){
//     if(year%100===0){
//         if(year%400===0){
//             return "leap year.";
//         }else{
//             return "Not leap year.";
//         }
//     }else{
//         return "leap year.";
//     }
// }else{
//     return "Not leap year.";
// }





// if ((hsc >=70)  || (sslc >= 70) || (ug>=70)|| (pg>=70)){}










// life in days, weeks , months problem 


function lifeInWeeks(age) {
    maxAge=90;
    let leftAge= maxAge-age;
    // you have ${leftDays} left
    leftDays= leftAge*365;

    // ${leftWeeks}
    let leftWeeks=leftAge * 52;

    // ${LeftMonths}
    LeftMonths = leftAge * 12;

    // let msg =

    console.log(`Now your are ${age} You have ${leftDays } days, ${leftWeeks} weeks, and ${LeftMonths} months left.`);

    // let msg ="You have " + leftDays  + " days, "  + leftWeeks + " weeks, and " + LeftMonths + "  months left."
    // return msg;
}

// console.log(lifeInWeeks(22))
// console.log(lifeInWeeks(22))
// lifeInWee s(22)
// lifeInWeeks(62)

// ;

//---------------------------------
// checking a string is there in a array using //ARRAY.includes() method .

const guests = ["santhosh","john","hari","mani","praveen"]

const guestCheck =(guests)=>{
let gName = prompt("Hey hi, What is your name .");

if (guests.includes(gName) ){
    alert(`Welcome ${gName} , Have a drink 🍹`)
}else{
    alert("Sorry 🥹 May be next time..")
}
}

// console.log(guestCheck(guests))

// -------------------------------------
// fizz buzz game 


let userNumber = 15;
let output=[];//we have declared it outside because .. to store and keep the values all the time .. if we declared it inside the values will be only remembered only when the function is called .
const fizBuzz=()=>{
    
    // return output
    for(n=1; n<userNumber; n++){ 
    if((n%3===0)&&(n%5===0)){ //only if clearly div by 3 & 5
        output.push("FizzBuzz")
        console.log(output);
    }else if(n%3===0){ //if clearly div by 3
        output.push("Fizz");
        console.log(output);
    }else if(n%5===0){ //if clearly div by 5
        output.push("buzz");
        console.log(output);
    }else{
        output.push(n)
        console.log(output);
    }
     // incrementing the value of the n by 1 every time the function is called  
    }
}
// fizBuzz()

// for (i=1; i<userNumber; i++){
//     fizBuzz();
// } running function using for loop instead while ..

// -----------------------------------
// Who's Buying Lunch game 

var names=["Angela", "Ben", "Jenny", "Michael", "Chloe","Angela", "Ben", "Jenny", "Michael", "Chloe"];

const whosPaying=(names) =>`${names[ Math.floor(Math.random()*names.length)]} is going to buy lunch today!`


// console.log(whosPaying(names))

//--------------------------------
//while loop challenge --counting from the last 

let snNo=99;
function beerCount(){
    while(snNo>=0){
        let snNo1;
        let bottleWorld;
        let distribution;

        if (snNo>=1){
            distribution= 'Take 1 down, pass it around';
        }else {
            distribution ="Go to the store and buy some more"
        }

        if (snNo-1===0 ||snNo===0){
            snNo1="no more";
        }else{
            snNo1 = snNo-1;
        }

        // bottle or bottles
        if (snNo===1){
            bottleWorld="bottle"
        }else{
            bottleWorld="bottles"
        }   
        
        // for last line snNo
        if(snNo===0){
            snNo="no more"
        }
        console.log(`${snNo} ${bottleWorld} of beer on the wall, ${snNo} ${bottleWorld} of beer. ${distribution}, ${snNo1} bottles of beer on the wall. `);       
        snNo--;
        
    }

}

// beerCount() //calling the function 


//-----------------------------------------
// Fibonacci series 

    
const fibonacciGenerator = (n) =>{
    let fibResult =[]
    let count=2;
    let x=0;
    let y=1;
    if (n<=1){
        fibResult.push(x)
        return fibResult
    }else if(n===2){
        fibResult.push(x,y)
        return fibResult;
    }else{
        fibResult.push(x,y);

        for (count=2;  count<=n-1 ; count++){
                fibResult.push(fibResult[fibResult.length-1]+fibResult[fibResult.length-2])
            }            
            return fibResult;
    }
}

let n= 10;
let g=fibonacciGenerator(n);
// console.log(g)

// console.log(fibResult)
//         fibResult.push(1)
//         console.log(fibResult)
//         fibResult.push(2)
//         console.log(fibResult)
//         fibResult.push(3)
//         console.log(fibResult)
//         fibResult.push(5)
//         console.log(fibResult)
//         fibResult.push(fibResult[fibResult.length-1]+fibResult[fibResult.length-2])
//         console.log(fibResult)
//         console.log(fibResult)
//         fibResult.push(13)
//         fibResult.push(fibResult[fibResult.length-1]+fibResult[fibResult.length-2])
//         console.log(fibResult)
//         fibResult.push(fibResult[fibResult.length-1]+fibResult[fibResult.length-2])
//         console.log(fibResult)

//--------------------------------------------------
//checking array lastindex - lastindex-1
let newNum=[1,2,3,4,5,6,7,8,9,10,20]

// console.log(newNum.length, newNum.length-1)
let d=newNum.length-1
// console.log(d)
// console.log(newNum[newNum.length-1]-newNum[newNum.length-2])

// console.log(fibonacciGenerator(n))


function fibonacci(num) {
    // x is representing the first term,
    // y is representing the second term, and
    // z is representing the sum of x and y.
    var answer = [];
    var x = 0;
    var y = 1;
    var z;
  
    // Since, the first two elements are fixed.
    // Storing the first two terms.
    answer.push(x);
    answer.push(y); 
  
    var i = 2;
    while (i < num) {
      z = x + y;
      x = y;
      y = z;
  
      // Storing the current element
      answer.push(z);
      i = i + 1;
    }
    return answer;
  }
  
  var num = 10;
  answer = fibonacci(num);
  
//   console.log("The Fibonacci series is till the 10th term is: ", answer);


