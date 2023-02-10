
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
// console.log(fiftyThirtyTwenty(10000))
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

// console.log(deStructure("other"))
// return fr > gr ? 'f' : fr < gr ? 'g' : 'neither';}
// let a , b, c , other;
// [a,b,c, ...other]=[1, 2, 3, 4, 5, 6, 7, 8] 


let johObj={
    name: "john",
    age: 23,
    address: "chennai",
    address1: "chennai"
}

let {name:name23, age : bc , address: cd=""} = johObj 

const obj =  { two : 2 }
//setting default value to avoid undefined error 
var { one=1, two } = obj

// console.log(one)
// -------------------------------
//  Count the total amount of key pairs in an object 
 function totalAmountAdjectives(obj) {
	return Object.values(obj).length
}
// console.log(Object.values(johObj).length)

// console.log(totalAmountAdjectives(johObj))

// ============================================
// converting the properties of an object into an array .
//each key:value pair should have separate index in the array

function toArray(obj) {
        // console.log(Object.entries(obj))
        let result=[]
for (const [key, value] of Object.entries(obj)) {
    // console.log(`${key}: ${value}`);
    result.push([key,value])
  }
return result
}
// const toArray = Object.entries;
// console.log((toArray({ a: 1, b: 2 })))

// ---------------------------------------------------
// to check the num is in the range of the given object 

function isInRange(num, range) {
    // console.log(num)	
    // console.log(range.Math.min())
    console.log(num >= range.min && num <= range.max)
}

// isInRange(-1, { min: -1, max: 1 }) //invoking 

// let acb = 499999
// console.log(Math.round(acb/1000000)*1000000)

// -------------------------------------------------
// Rounding in Millions

//millionsRounding([
//     ["Nice", 942208],
//     ["Abu Dhabi", 1482816],
//     ["Naples", 2186853],
//     ["Vatican City", 572]
//   ])

//  <------> experted output <--------->
// [
//     ["Nice", 1000000],
//     ["Abu Dhabi", 1000000],
//     ["Naples", 2000000],
//     ["Vatican City", 0]
//   ]


const cities1 = [
	['Tokyo', 37435191],
	['Delhi', 29399141],
	['Shanghai', 26317104]
	]

    // METHOD 1
    function millionsRounding(arr)
    {
        let resultT=cities1.map(function(a){
       a[1]=(Math.round(a[1]/1e6)*1e6)
       return a
    })
    console.log(resultT)
}
    
    // METHOD 2
    function millionsRounding(arr)
    {
        let result= []
    for (let [key] of Object.entries(arr)){
        console.log(Math.round(arr[key][1]/1000000)*1000000)  
        // console.log(key)  
        result.push([cities1[key][0],(Math.round(arr[key][1]/1e6)*1e6)])

        // console.log(result)
    }}

// -----------------------------------------------
// checking Does the Object Contain a Given Key

let obj1 = { a: 44, b: 45, c: 46 };
function hasKey(obj, key) {
    result= true
        for (let ke of Object.keys(obj)){
            // console.log(ke)
        result =  ke == key ? true : false
        }
        console.log(result)
        // Another method 
        // return obj.hasOwnProperty(key)
}

// console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"))


// ----------------------------
// accessing nested arrays and objects -- w3s
const person = new Object()

let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

// for (x in myObj.cars){
//     // console.log(x)
//     console.log(myObj.cars[x]["name"])

//     for (y in myObj.cars[x]["models"])
//     console.log(myObj.cars[x]["models"][y])
//     console.log("\n")
// }

//-----
const person3 = {
    firstName: "",
    lastName: "Doe",
    id: 5566,
    language: "en",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    get lang(){
        return this.language
    },
    set firstN(name){
        return this.firstName=name
    }
  };
//adding a method to an object 
  person3.newFun= function(){
    return this.id
  }
//   console.log(person3)
//  let xcy = JSON.stringify(person3)
  person3.firstN="santhosh"

// ---------------------------------------------------
// sorting of an array of objects by property value 

function sortDrinkByPrice(drinks) {
//     let temp=0;
//     for(let j = 0 ; j<drinks.length ; j++)
//    { for(let i = 0 ; i<drinks.length-1; i++){
//     if (drinks[i]["price"]>drinks[i+1]["price"]){
//         temp = drinks[i+1]
//         drinks[i+1]= drinks[i]
//         drinks[i]=temp
//     }
// }
// }return drinks
const sorted = drinks.sort(function(a,b){
    return a.price-b.price
})
 return sorted
}

// console.log(sortDrinkByPrice([
//     // 5,18,32,
//     {name: "lemonade", price: 90},
//     {name: "lemonade", price: 80},
//     {name: "lemonade", price: 50},
//     {name: "lime", price: 70},
//     {name: "lime", price: 60},
//     // {name: "lime", price: 40},
// ]))

// --------------------------------------------------------
// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

// <--------------------->expected results<-------------------->
// freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false
// freeShipping({ "Flatscreen TV": 399.99 }) ➞ true


function freeShipping(order) {
    /* Can also be written as 
        let result=  Object.values(order).reduce((a,b) => b+a ,0) 
        return result >= 50 ? true : false;*/

    // Another method 
    // return Object.values(order).reduce((a,b)=>b+a) > 50


    let result= Object.values(order).reduce(function(a,b){
        return a+b},0)
        console.log(result)
    return result >= 50 ? true : false;
}

// console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99, "Plastic Ducks": 20.99 }))


// ---------------------------

function theGround(obj) {
    //console.log(obj["category"].length)
    console.log(obj["name"].length>obj["category"].length ? obj["name"] : obj["name"].length<obj["category"].length ? obj["category"]  : "john")
    
    
    //return obj["name"].length>obj["category"].length? obj["name"]: obj["category"]
  }

  // <=-=-=-=-=-=> JSCODEBOX Challenges <=-=-=-=-=-=-=-=>


//--------------------------------------------
// counting odd numbers in an array using higher order function
function countOdds(numbers) {
    // let result1 =0;
    // numbers.filter(a=>{
    // if(a%2!==0) result1+=1
    // })
    // return result1

    //Another method using filter method 
    return numbers.filter(a=>{
        return a%2!==0 //result1+=1
    }).length

    // Another method using forEach method ()
    // let result =0;
    // numbers.forEach(a=>{
    // if(a%2!==0) result+=1
    // })
    // return result
}

// console.log(countOdds([1,5,2,6,5,3,9,2]))

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// 
function more4than0(n) {
    let zeros = 0,fours = 0 ;
    n.map(a=> a===0 ? zeros++ : a===4 ? fours++ : "");

    // Another method 
    // for (let i= 0 ; i<n.length ; i++){
    //     n[i]===0 ? zeros++ : n[i]===4 ? fours++ : ""
    // }

    // statement below is required for both Methods 
    return zeros < fours ? true : false;
}
// console.log(more4than0([0,4,4]))

// -------------------------------------------
// Math.abs()
// if some 35 - 40 => -5 , if suppose we need all the result to be only in positive numbers , we can use this function 

// console.log(Math.abs(70-60)) // => 10
// console.log(Math.abs(70-80)) // => 10

// let a = ["john"].join("santosh")

JSON.stringify()

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// returning array in reverse order 


function reverseLetters(chars) {
    let result = [];
    let len = chars.length;
    for (let i = len-1 ; i>=0 ; i--){
      result.push(chars[i])
    }
    return result

    // using inbuilt methods 
    // return chars.reverse()
  }

//   console.log(reverseLetters(['a','r','s','t','j',"",'e','e','a','y']))

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Given is a word word. Run through the word and merge every second letter into a new word.

function strangeWord(word) {
    
    for (let i = 1 ; i<word.length ; i= i+2 ){
    //   word.slice(2)
    console.log(i);
    console.log(word)
    }
    // console.log(word)
    return word
  }

//   console.log(strangeWord("santhosh"))

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// addName({ piano: 500, stereo: 300 }, "Caligula", 440)
// <=-=-=-=-=-=->Experted output <=-=-=-=-=-=-=-=->
// ➞ { piano: 500, stereo: 300, Caligula: 440 }

let ob= {
}
ob["tour"]= "plan";
ob["name"]= "joe"

function addName(obj, name, value) {
	// console.log(obj)
    let a = Object.assign(obj)
    return {...a,[name]: value}
    
    
    // return {...obj,[name]:value}



    // obj[name]= value 
    // return obj
}

// console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440))

// ----------------------------

// if(x==-3){
//     return y== "f" ? "great grandmother" :y == "m"? "great grandfather" : ""
// }

// else if(x==-2){
//     return y== "f" ? "grandmother" : y == "m"? "grandfather" : ""
// }


function generation(x, y) {
    const a ={
        "-3": {m: "great grandfather", f: "great grandmother" },
        "-2": {m: "grandfather", f: "grandmother" },
        "-1": {m: "father", f: "mother" },
        "0": {m: "me!", f: "me!"},
        "1": {m: "son", f: "daughter" },
        "2": {m: "grandson", f: "granddaughter" },
        "3": {m: "great grandson", f: "great granddaughter" },
    
    }
    return a[x][y]
}

// console.log(generation(-1, "f"))

// let a = {
//     name: "john",
//     age: 25,
//     address: {city:"chennai"},
// }
// console.log(a);

// // b=Object.assign({},a)
// b = {...a,letter: "To My address"}
// // b=structuredClone(a)
// // console.log(b);


// b["pant"]= "red"
// console.log(b);

// // b.address["house"]= "no 15"
// // console.log(b);
// // console.log(a);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// count the length of the number 
let num = -123456789;
let count = 0;
while (num!=0){
    num = Math.floor(Math.abs(num)/10)
    count++;
}

// console.log(count)

// recursion 

function factorial(x) {
    // TERMINATION
    if (x < 0) return;
    // BASE
    if (x === 0) return 1;
    // RECURSION
    return x * factorial(x -1);
  }
//   console.log(factorial(5));
  // 6

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

  class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA
      this.sideB = sideB
    }
    getArea(){return this.sideA*this.sideB}
    getPerimeter(){return (this.sideA + this.sideB) *2}
  }

//   let Rect = new Rectangle(10,10)
//   console.log(Rect.getPerimeter())

  class Circle {
    constructor(radius){
        this.rad = radius;
        this.pi= Math.PI
    }
    
    getArea(){
        return this.pi*this.rad**2
    }

    getPerimeter(){
        return 2*this.pi*this.rad
    }
}

// let q = new Circle(4.44);
// console.log(q.getArea());
// console.log(q.getPerimeter());


//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//Create a function that takes an object and returns the keys and values as separate arrays.

function keysAndValues(obj) {
    let result = [[],[]]
	for (let [a,b] of Object.entries(obj)){
        result[0].push(a);
        result[1].push(b);
    }
    return result;

    // Another Method 
    // const key = Object.keys(obj)
    // console.log(key)
    // const values = key.map(function(a){
    //     console.log(obj[a])
    // }) ;
    // return [key,values]
}

// console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }))


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// check whether the given parameter is an Object or not 
function isObject(value) {
	return value instanceof Object
}

// console.log(isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')))

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Create the function that takes an array with objects and returns the sum of people's budgets.

function getBudgets(arr) {
	// return arr.map(function(a){
    //     console.log(a["budget"])
    // })

    // Another Method
    return arr.reduce(function(prev,curr){
        return prev+curr["budget"] // curr.budget 
    },0)
}

// console.log(getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 }
//   ]))


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 

function calculateLosses(obj) {
//     let result =0;
//     Object.values(obj).forEach(function(a){
//     return result+=a
//    })

// Another Method
    let result = Object.values(obj).reduce(function(acc,cur){    return acc+cur   },0)
    return result===0 ? "Lucky you!" : result
}
// console.log(calculateLosses({tv: 30,
//     skate: 20,
//     stereo: 50,}))


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//Use ES6 object destructuring to rename the variable alias to nickname and give nickname a default value of "JD".

// =-=-=-= how to destructure a object and how to change the default "Key name" name to a new "Key name" 

// <=-=-=-=-=-=-> question <=-=-=-=-=-=-=->

// const testObj= { first: "James", last: "Baker" }
// let  { first = "John", last = "Doe", alias } = testObj

// <=-=-=-=-=-=-> solution <=-=-=-=-=-=-=->


// const solveObj=  { first: "James", last: "Baker" ,alias: "JD"}
// let { first = "John", last = "Doe", alias:nickname }=solveObj

// console.log(nickname) //printing the value of alias using "nickname"

