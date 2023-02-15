function increasePeople(){
    // document.getElementById("numberOfPeople").innerText=count(1)
    let a = +totalPeople.innerHTML
    totalPeople.innerHTML= a+=1
    calculateBill()
}
function decreasePeople(){
    let a = +totalPeople.innerHTML
    if (a<=1){
        alert("hey! At least one of you should pay 🙂")
        //throw
        return;
    }
        
    // document.getElementById("numberOfPeople").innerHTML=count(-1)
    totalPeople.innerHTML= a-=1
    calculateBill()
}

function calculateBill(){
    // console.log(a.value)
    let billTot = billTotalInput();
    let tipTot= tipTotalInput();
    let result = ((billTot*tipTot/100)+billTot)/totalPeople.innerHTML
    perPersonTot.innerHTML=`$ ${result.toFixed(2).toLocaleString('')}`
    
}
// let a = document.getElementById("billTotalInput")
// if we use this method we have use a.value in calcBill()
let billTotalInput = function(){
    return +document.getElementById("billTotalInput").value
}
let tipTotalInput= function(){
    return +document.getElementById("tipInput").value
}

let perPersonTot = document.getElementById('perPersonTotal')

let totalPeople = document.getElementById("numberOfPeople")
// const totalPeople = function (){
//     return +document.getElementById("numberOfPeople").innerHTML
// }
