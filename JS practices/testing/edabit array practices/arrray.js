// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// https://edabit.com/challenge/iKRmj2Q6GQHkAXXxf


function textToNumberBinary(str) {
	let strArray = str.toLowerCase().split(" ")

    let filteredArray=  strArray.filter(a => {
        return a == "zero" || a== "one"
    }).map(a=>{
        return a=="one" ? 1 : 0
    }).join("") 
    let len = +filteredArray.length;

    if (len<8 ) return ""

    let sliceCount = 16;
    while(len>sliceCount){
        for(let i = 0 ; i<1; i++){
            sliceCount+=8;
        }
    }
    return filteredArray.slice(0,sliceCount-8)
}


// console.log(textToNumberBinary('One zero zero One zero zero One zero zero'))


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// finding min and max of age using array.reduce()
let students = [
    { id: 1, name: "John", dept: "CSE", age: 18, isSelected: true },
    { id: 2, name: "Jack", dept: "ECE", age: 20, isSelected: false },
    { id: 3, name: "Mary", dept: "EEE", age: 19, isSelected: false },
    { id: 4, name: "Robert", dept: "IT", age: 21, isSelected: true }
];

let sorted = students.reduce(function (prev,curr){
  // console.log(prev,curr)
  return curr.age>prev.age? prev : curr
},0)
// console.log(sorted)

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// https://edabit.com/challenge/GLbuMfTtDWwDv2F73
// counting 

function countTrue(arr) {
	result ={"true": 0 , "false": 0}

    arr.filter(function(a){
        return a==true? result["true"]+=1 : result["false"]+=1
    })
    return result
}

// console.log(countTrue([true, false, false, true, false]))

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Concatenate Variable Number of Input Arrays
// https://edabit.com/challenge/Hs4TpDHX57Rqegmgg

function concat(...args) {
    // method 1 
    return args.flat()

    // method 2 
    // let result = [];
    // for (let i = 0 ; i<args.length ; i++){
    //     for(let j = 0 ; j<args[i].length ; j++){
    //         result.push(args[i][j])
    //     }
    // }
    // return result;

    // args.forEach(a=>{result.push(...a);console.log(a,result)})
    // return result;

}
// console.log(concat([1], [2], [3], [4], [5], [6], [7], [3, 4]))

// result =>(9) [1, 2, 3, 4, 5, 6, 7, 3, 4]

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// https://edabit.com/challenge/GMh85YdL7kAutJ5YN
// mirror an array 

function mirror(arr) {
    // .slice(0,arr.length-1)
    return [...arr.slice(0,arr.length-1),...arr.reverse()]    
    // return [...arr.slice(0,arr.length-1),...arr.reverse()]
}

// console.log(mirror([1, 2, 3, 4,5]))

// output => [1, 2, 3, 4, 5, 4, 3, 2, 1]

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// counting  Number of Boomerangs
// https://edabit.com/challenge/b7iHQDw72zzkmgCun

// a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.


function countBoomerangs(arr){
    // let result = 0 ;
    // for(let i =0; i<arr.length-2; i++){
    //     if (arr[i]==arr[i+2] && arr[i]!= arr[i+1]){
    //         result +=1;
    //     }
    // }
    // return result


    return arr.reduce((prev,curr,i)=>{
        console.log(prev)
        return prev + (curr===arr[i+2] && curr!= arr[i+1])
    },0) // 0 + true + true=> 2 

}

// console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]))

// const fs = require('fs')
// let data  = fs.readFileSync("test.txt")

// console.log(data)

let user = prompt("userName",'')
if(user == "Admin"){
    let passwd= prompt("Enter your password", "");
    if(passwd == "TheMaster"){
        alert("Welcome");
    }else if(passwd ==="" || passwd === null){
        alert("Canceled")
    }else{
        alert("Wrong password")
    }
}else if(user=== '' || user ===null){
    alert("Canceled")
}else{
    alert("i don't know you")
}