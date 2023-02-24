function getComputerChoice (){
    let choice = Math.floor(Math.random()*3)+1;
    if(choice == 1) return "rock"
    else if (choice == 2 ) return "paper"
    else return "scissor"
}


function playRound(pSelect ,cSelect ){
    if(pSelect==cSelect) return "Tie game"


    if(pSelect=="rock" && cSelect=="paper") return "You Lose! Paper beats Rock"
    else if(pSelect=="paper" && cSelect=="rock") return "You win! Paper beats Rock"

    if(pSelect=="paper" && cSelect=="scissor") return "You Lose! scissor cuts Paper"
    else if(pSelect=="scissor" && cSelect=="paper") return "You win! scissor cuts Paper"
    
    if(pSelect=="scissor" && cSelect=="rock") return "You Lose! rock beat scissor "
    if(pSelect=="rock" && cSelect=="scissor") return "You win! rock beat scissor"

    if(pSelect== "rock" || pSelect == "paper" || pSelect=="scissor") return "Invalid choice"

// let result ;
//     switch(pSelect,cSelect){
//         case "rock" == "paper": 
//             result= "Tie game";
//             break;
//         case "rock" && "paper":
//             result=  "You Lose! Paper beats Rock";
//             break;
//         case "paper" && "rock":
//             result = "You win! Paper beats Rock";
//             break;
//         case "paper" && "scissor":
//             result= "You Lose! scissor cuts Paper";
//             break;
//         case "scissor" && "paper":
//             result = "You win! scissor cuts Paper"
//             break;
//         case "scissor" && "rock":
//             result = "You Lose! rock beat scissor ";
//             break;
//         case "rock" && "scissor":
//             result = "You win! rock beat scissor";
//             break;
//         default : 
//         result = "Invalid choice";
//     }
//     return result;
}

function game (){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, scissor").toLowerCase()
        let computerSelection = getComputerChoice()
        console.log("p : ",playerSelection, "," + " c :"+computerSelection)
        console.log(playRound(computerSelection,playerSelection))
    }
}
console.log(game())

