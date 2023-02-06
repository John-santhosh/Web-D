
function countTrue(arr) {
    let count =0 ;
    if((arr==null)){
        return 0;
    }else{
        for (let ar of arr){
            if (ar===true){
                count += 1
            }
        }
    }

    return count 
}
// console.log(countTrue([true,false]))

function fiftyThirtyTwenty(ati) {
    let fifty = ati/100*50;
    let thirty = ati/100*30;
    let twenty = ati/100*20;

    return {
        Needs: fifty,
        Wants: thirty,
        Savings: twenty
    }
}
console.log(fiftyThirtyTwenty(10000))
// Expected: '{ Needs: 5000

//------------------------------------------
// const  whichIsLarger=(f,g)=>  f>g?"f": f<g ? "g" : "neither"

function whichIsLarger(f, g) {
	let [fr, gr] = [f(), g()];
	return fr > gr ? 'f' : fr < gr ? 'g' : 'neither';}
// console.log(whichIsLarger(function(a){return 50},()=>20))

// function whichIsLarger(f, g) {
// 	let fFunction = f()
// 	let gFunction = g()
// 		if(fFunction > gFunction){
// 			return "f"
// 		}
// 		else if (fFunction === gFunction){
// 			return "neither"
// 		}
// 		else{return "g"}
// }
// ----------------------------------------
// Volume of a box 

function volumeOfBox(sizes) {
	// let width= sizes.width;
    // let len = sizes.length;
    // let height= sizes.height;
    // return len*height*width;
    return (sizes["length"]*sizes["height"]*sizes["width"]);
}
// console.log(volumeOfBox({width: 11,length: 1, height: 2}))


// ---------------------------------------
// match box house calculation 

const  matchHouses=step=> (step*6)-(step-1)

// console.log(matchHouses(4))

// --------------------------------------------
// Calculate the Total Price of Groceries

function getTotalPrice(groceries) {
    let result=0;
    for (let i=0; i<groceries.length;i++){
        result+=(groceries[i].price*groceries[i].quantity)
    }
    return Math.round(result*10)/10
}
// console.log(getTotalPrice([
// 	{ product: "Chocolate", quantity: 1, price: 0.10 },
// 	{ product: "Lollipop", quantity: 1, price: 0.20 }
// ]))

// another method

// let groceries=[
//     { product: "Chocolate", quantity: 1, price: 1 },
//     { product: "Lollipop", quantity: 1, price: 1.5 },
//     // { product: "Chocolate", quantity: 1, price: 3.3 },
//     // { product: "Lollipop", quantity: 1, price: 1.20 }
//     ]
// let abc= groceries.reduce(function(prev,curr){
//     // console.log(prev["price"])
//     // console.log(curr["price"])
//     return prev+=curr["price"] // curr=0+1 1 // curr = 1+ 1.5 2.5
//     console.log(prev)
//     return(curr)
// },0)
// console.log(abc)

function ca(groceries) {
	return groceries.reduce(function(prev,current){
		return Math.round((prev+=current["price"])*10)/10
	},0)
}

// console.log(ca([{ product: "Chocolate", quantity: 2.20, price: 3 },
// { product: "Lollipop", quantity: 1, price: 4.20 },]))

//======================================
// destructuring Object 

// arr = [1, 2, 3, 4, 5, 6, 7, 8]

// let [a,b,c]=arr

function deStructure (str){
    let arr = [1, 2, 3, 4, 5, 6, 7, 8]// = [a,b,c,...rest]
    let [a,b,c]=arr
    
     return str==="first"? a : str==="second" ? b : str==="third" ? c : arr.slice(3)

}

console.log(deStructure("other"))
// return fr > gr ? 'f' : fr < gr ? 'g' : 'neither';}
let a , b, c , other;
[a,b,c, ...other]=[1, 2, 3, 4, 5, 6, 7, 8] 


let johObj={
    name: "john",
    age: 23,
    address: "chennai",
    address1: "chennai"
}

let {name, age : bc , address: cd=""} = johObj 

const obj =  { two : 2 }

var { one=1, two } = obj

console.log(one)
// -------------------------------
//  Count the total amount of key pairs in an object 
 function totalAmountAdjectives(obj) {
	return Object.values(obj).length
}
// console.log(Object.values(johObj).length)

console.log(totalAmountAdjectives(johObj))

// ============================================
// converting the properties of an object into an array .
//each key:value pair should have separate index in the aray
function toArray(obj) {
        // console.log(Object.entries(obj))
        let result=[]
for (const [key, value] of Object.entries(obj)) {
    // console.log(`${key}: ${value}`);
    result.push([key,value])
  }
return result
}

console.log((toArray({ a: 1, b: 2 })))

// ---------------------------------------------------

function isInRange(num, range) {
    // console.log(num)	
    // console.log(range.Math.min())
    console.log(num >= range.min && num <= range.max)
}

isInRange(-1, { min: -1, max: 1 })

let acb = 499999
console.log(Math.round(acb/1000000)*1000000)


const cities1 = [
	['Tokyo', 37435191],
	['Delhi', 29399141],
	['Shanghai', 26317104]
	]
    let result= []
    let resultT=cities1.map(function(a){
        console.log(a)
       a[1]=(Math.round(a[1]/1e6)*1e6)
       return a
    })

    console.log(resultT)
    for (let [key] of Object.entries(cities1)){
        // console.log(Math.round(cities1[key][1]/1000000)*1000000)  
        // console.log(key)  
        result.push([cities1[key][0]],[(Math.round(cities1[key][1]/1e6)*1e6)])

    }
console.log(result)
// [['Tokyo', 37000000], ['Delhi', 29000000], ['Shanghai', 26000000]]", instead got: '37000000'