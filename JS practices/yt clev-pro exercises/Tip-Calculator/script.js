let trackCount = 1 ;
function count (num){
    return trackCount += num
}
function increasePeople(){
    document.getElementById("numberOfPeople").innerText=count(1)
    calculateBill()
}
function decreasePeople(){
    if (trackCount<=1) return;
    document.getElementById("numberOfPeople").innerHTML=count(-1)
    calculateBill()
}

function calculateBill(){
    let billTot = billTotalInput();
    let tipTot= tipTotalInput();
    let result = ((billTot*tipTot/100)+billTot)/numberOfPeopleInput()
    perPersonTot.innerHTML=`$ ${result.toFixed(2)}`
    
}

let billTotalInput = function(){
    return +document.getElementById("billTotalInput").value
}
let tipTotalInput= function(){
    return +document.getElementById("tipInput").value
}

let perPersonTot = document.getElementById('perPersonTotal')

const numberOfPeopleInput = function (){
    return +document.getElementById("numberOfPeople").innerHTML
}
