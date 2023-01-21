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
let myName="santhosh";
console.log(myName.charAt(5 ))

let myFloat=42
const myString="42";
console.log(myFloat===+myString);
var new2 = "33 123adc  44" ;
console.log(Number.parseFloat(new2));
let num3=45.223421;
console.log(Number(num3.toFixed(3)))


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
switch (Math.round(Math.random() *5 + 1)){
    case 1 : console.log(1);
    break;
    case 2 : console.log(2);
    break;
    case 3 : console.log(3);
    break;
    case 4 : console.log(4);
    break;
    default: console.log("No Match");
}

let playerOne="rock";
let computer="rock";

switch(playerOne){
    case computer : 
    console.log("tie game");
    break;
    
    case "rock":
        
}