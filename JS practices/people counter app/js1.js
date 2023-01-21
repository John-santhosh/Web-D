// document.getElementById("count").innerText=10;

// function increment(){
//     console.log("The button was clicked")
// }



let countEl= document.getElementById("count-el")
let saveEl= document.getElementById("save-el")

let count=0;
console.log(saveEl)

function increment(){
    count+=1;
    countEl.textContent= count;
}

function save()
{
    console.log(count)
    let saveVar= count+ " - ";
    saveEl.textContent+=saveVar;
    count=0;
    countEl.textContent= 0;

}



