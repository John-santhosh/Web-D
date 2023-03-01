function getComputerChoice (){
    let choice = Math.floor(Math.random()*3)+1;
    if(choice == 1){computerResult="✊";return "rock"} 
    else if (choice == 2 ) {computerResult="🤚";return "paper"}
    else {computerResult="✌️";return "scissor"}
}
let computerResult = '';



let yourResult= document.querySelector('#yourResult')
let comResult= document.querySelector('#computerResult')
let model= document.querySelector('.model')

let finalize= '';

document.getElementById
function playRound(pSelect ,cSelect ){
    if(pSelect==cSelect) {
        finalize ='Tie game';
        return "Tie game"
    }

    if(pSelect=="rock" && cSelect=="paper") {
        finalize ='You Lose';
        return "Paper beats Rock"
    }
    else if(pSelect=="paper" && cSelect=="rock") {
        finalize ='You win';
        return "Paper beats Rock"
    }

    else if(pSelect=="paper" && cSelect=="scissor"){
        finalize ='You Lose';
        return "You Lose! scissor cuts Paper"
    } 
    else if(pSelect=="scissor" && cSelect=="paper"){
        finalize ='You win';
        return "scissor cuts Paper"
    } 
    
    else if(pSelect=="scissor" && cSelect=="rock"){
        finalize ='You Lose';
        return "Rock beat scissor "
    }
    else if(pSelect=="rock" && cSelect=="scissor"){
        finalize ='You win';
        return "Rock beat scissor"
    } 


}



let computerChoice = document.getElementById('computer-choice')
let yourChoice = document.getElementById('your-choice')

// computerChoice.textContent=

let totalResult={
    p: 0,
    c: 0
};
const finalOutput = document.getElementById('finalize')
const button = document.querySelectorAll("button")

let playBtn= document.querySelector('#play-btn')
playBtn.addEventListener('click',function(){
    model.classList.remove("active");
    totalResult.c=0;
    totalResult.p=0
    comResult.textContent = totalResult.c;
    yourResult.innerHTML = totalResult.p;
})

let modelText = document.querySelector('.model-text')

//setting  model Result 
function ModelResult (a){
    if (a.c >= 5) {
        modelText.innerHTML = "You Lost";
    }
    if (a.p >= 5) {
        modelText.innerHTML = "You Win";
    }
}


button.forEach(btn=>btn.addEventListener('click',function(e){
    
    ModelResult(totalResult);

    if(totalResult.c>=5 || totalResult.p>=5) {
    model.classList.add("active")
    playBtn.textContent='play again'
    playBtn();
    }

    let playerSelection = e.target.value
    console.log(e.target.value)
    let computerSelection = getComputerChoice()

    yourChoice.textContent=e.target.textContent;
    console.log(e.target.textContent)
    computerChoice.textContent=computerResult;

    let result = playRound(computerSelection,playerSelection)

    if(finalize=="You win"){
        totalResult.p+=1
    }else if(finalize=="You Lose"){
        totalResult.c+=1
    }
    finalOutput.textContent=finalize

    comResult.textContent=totalResult.c;
    yourResult.innerHTML=totalResult.p;

    let displayResult = document.querySelector('.displayResult')
    return displayResult.textContent=result;
}))
