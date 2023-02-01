// 10. Write a program to find factor of any number

const evenDiv=(num,divNum)=>{
    if(num%divNum===0){
        return divNum
    }
}

// console.log(factorCheck(10)) //invoking 

function factorCheck(num){
let result=[];
for(let i=2; i<num;i++){
    result.push(evenDiv(num,i))
}
return (result)
}

// const evenDiv=(num,divNum)=>{
//     if(num%divNum===0){
//         return divNum
//     }
//     // else return false;
//         // return num + divNum;
// }

// // console.log(factorCheck(10)) //invoking 

// function factorCheck(num){
// let result=[];
// for(let i=2; i<num;i++){
//     result.push(evenDiv(num,i))
// }
// return (result)
// }



//---------------------------------

// function evenDiv(num,divNum){
//     if(num%divNum===0){
//         continue
//         return divNum
//     }
//     // else return false;
// }

// function factorCheck(num){
//     for(let i=2; i<num;i++){
//         let result = evenDiv(num,i);
//         console.log(result)
//     }
    
//     }

//     factorCheck(10)