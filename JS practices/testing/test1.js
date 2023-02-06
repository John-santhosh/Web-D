
// let arr33= []
// // console.log(arr33)
// let objj = {}
// // console.log(objj);

// let obj ={
//     name: "john",
//     age: 22
// };
// // console.log(obj); // there will be a prototype is of the object .. so this prototype is by default created for an object .

// function Person (_name,_age){
//     this.name = _name;
//     this.age=_age
    
// }

// Person.prototype.getNameAndAge = function(){
//     console.log(this.age)
// }

// let person1 = new Person ("john", 23,)
// let person2 = new Person ("sant", 25)
// // console.log(person1);
// // console.log(person2);

// // person1.getNameAndAge()

// // function Const (){
// //     // this.name = _name;
// //     // this.age=_age
// //     // // this.total=_total
// //     // this.display= function (){
// //     //     return "details : "+ this.name +this.age
// //     // }
// // }
// // Const.prototype.name="john"
// // let const1=new Const()
// // let const2=new Const()
// // console.log(const1);

// // console.log(const2.display());

// // function Const1= (_name,_age)
// // class newConst {
// //     constructor(_name,_age){
// //         this.name = _name;
// //         this.age=_age
// //     }
// // }

// // let const2=new newConst("john",23)
// // console.log(const2);


// // class newConst1 extends newConst{
// //     constructor(_name,_age,tree){
// //         super(_name,_age)
// //         this.tree= tree
// //     }
// // }

// // let const3=new newConst1("john",23,"pop")
// // console.log(const3);



// // ----------------------------------------
// //  call

// let obj1 = {
//     fName: "john",
//     age: 22,

//     printDetails: function(){
//         console.log( `hi Iam ${this.fName} and ${this.age} old`)
//     }

// }

// let obj2 = {
//     fName: "santhosh",
//     age: 25,

// }
// // obj1.printDetails.call(obj2)
// // console.log(obj1)
// // obj1.printDetails()

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     }
//     const lydia = new Person('Lydia', 'Hallie');
//     const sarah = Person('Sarah', 'Smith');
//     // console.log(lydia);
//     // console.log(sarah);




// //---------------------------------------
// // add2Array([10,20,30,5,4,7,8,90],[40,50])
// function add2Array(a,b){

// let len = a.length+ b.length;
// let c= []
// for (let i=0; i<a.length; i++){
//   c[i]=a[i]
  
// }
// let j=0;
// for (let i = a.length; i<len; i++){
//     c[i]= b[j]
//     j++;
  
// }
// console.log(c)
// }

// //----------------------------
// // let a = [1,2,4,5,6], b=[1,2,4];
// // array2Inserting(a,b)
// function array2Inserting(a,b){
// let c = [];
// let len = a.length
//   // len = a.length<b.length ? b[len] : a[len];
//   if (a.length<b.length){
//     len = a.length
//     for (let i = len /*a.length */; i<b.length; i++){
//       c[i]= b[i]
//     }
//   }else{
//     len = b.length
//     for (let i = len /*b.length */ ; i<a.length; i++){
//       c[i]= a[i]
//     }
//   }
// for (let i = 0; i<len ;i++){
//   c[i]= a[i]*b[i]
//   }
// console.log(c)
// }

// //--------------------------------
// //inserting  a number in between of an array
// // insertingNum([10,20,40,50,8,0])
// function insertingNum(a){
// // let a=
// let num = 30;
// let len = a.length
// console.log(len)
// for (let i=+prompt(`where to insert ${num} (max limit 0 - ${len})`); i<len+1; i++){
//     let temp = a[i];
//     a[i]=num;
//     num = temp;
// }
//     // let temp = a[i];
//     // a[i]=num;
//     // num= temp;
//     // temp = a[3];
//     // a[3]=num;
//     // num= temp;
//     // temp = a[4];
//     // a[4]=num;
//     // num= temp;
//     // console.log(temp)
//     console.log(a)
// }


// //--------------------------------------
// // 
// let bubbleSort = function (a){
//     let flag = true;
//     // while(flag==true){
//         for (let i =0 ; i<a.length; i++){
//             for(let j =0 ; j<a.length - 1 - i /*1*/;j++){
//                 console.log(a[j], a[j+1])
//                 if(a[j]>a[j+1]){
//                 let temp= a[j] //temp = 10
//                 a[j]= a[j+1] //a[j] = 6
//                 a[j+1]=temp;
//                 console.log(a)
//             }
//         }
//     }
//         // flag =  false;
//         // console.log(flag)
//         console.log(a)
//         console.log(`${a[0]} is min number ${a[a.length-1]} is max number`)
//         // console.log(`${a[a.length-1]} is min number ${a[0]} is max number`)
//         // }
// }
// // bubbleSort([9,8,7,6,5,4,3,2,1,5])//["b","d" , "c" ,"e", "C"]



// let cart = {value: 5};
// function updateCart(a){
//     // a++;
//     cart.value++;
// }
// console.log(cart)

// updateCart(cart)
// updateCart(cart)
// updateCart(cart)

// console.log(cart)

// let abc= {
//     name: "john"
// };

// let bbc = abc;
// bbc.name="santhosh"i
// abc= {name: "creg"}
// abc.name= "pluto"












    // Object Reference
        // Primitive datatypes => String, Number, BigInt, Boolean, Null, Undefined
        // Copy by value
        // let firstName = "SkillSafari";
        // console.log(firstName); // SkillSafari
        // let lastName = firstName;
        // console.log(lastName); // SkillSafari
        // firstName = "EduKeys";
        // console.log(firstName); // EduKeys
        // console.log(lastName); // SkillSafari

        // Copy by reference
        // let userOne = {
        //     firstName: "SkillSafari",
        //     lastName: "EduKeys",
        //     age: 25
        // }
        // // console.log(userOne);
        // let userTwo = userOne;
        // // console.log(userOne);
        // // console.log(userTwo);
        // userTwo.isAdmin = true;
        // console.log(userOne);
        // console.log(userTwo);

        // // Comparing 'objects'
        // console.log(userOne == userTwo); // true
        // console.log(userOne === userTwo); // true

        // let objOne = {};
        // let objTwo = {};
        // console.log(objOne);
        // console.log(objTwo);
        // console.log(objOne == objTwo); // false
        // console.log(objOne === objTwo); // false

        // properties of the "const" variable also be changed here
        // const objOne = {
        //     age: 20,
        // }
        // console.log(objOne.age); // 20
        // objOne.age = 25;
        // console.log(objOne.age); // 25

        // Clone the Object Properties
        // let userOne = {
        //     firstName: "SkillSafari",
        //     lastName: "EduKeys",
        //     age: 25,
        // }
        // console.log(userOne); //
        // let userTwo = {};
        // userTwo["isAdmin"] = true;
        // console.log(userTwo); // {}
        // for (const key in userOne) {
        //     console.log(key); // "lastName"
        //     userTwo[key] = userOne[key]; // userTwo["firstName"] = userOne["firstName"] => "SkillSafari"
        //     console.log(`${userTwo[key]} => ${userOne[key]}`);
        // }
        // // console.log(userTwo);
        // userTwo.isAdmin = true;
        // console.log(userOne);
        // console.log(userTwo);

        // let user = {
        //     name: "skillsafari",
        //     age: 25,
        //     userFun: function () {
        //         console.log("Hello");
        //     }
        // }
        // user.userFun();

        // let userDetails = {
        //     address: {
        //         street: "abc",
        //         pincode: 123456,
        //         city: "Bangalore"
        //     }
        // }
        // console.log(userDetails.address.city)
        // Merge the Object Properties
        // Object.assign()
        // Syntax (Copy)
        // Object.assign(dest, source);
        // Syntax (Merge)
        // Object.assign(dest, source-1, source-2,..., source-N);

        // let userDetails = {
        //     name: {
        //         firstName: "SkillSafari",
        //         lastName: "EduKeys",
        //     },
        //     age: 25,
        //     isAdmin: true,
        // }
        // let cloneUserDetails = {};
        // console.log("-----Befor-----");
        // console.log(userDetails);
        // console.log(cloneUserDetails);
        // Object.assign(cloneUserDetails, userDetails);
        // console.log("-----After-----");
        // console.log(userDetails);
        // cloneUserDetails.age = 18;
        // console.log(cloneUserDetails);

        // // Merging
        // let b = { age: 20 };
        // // let c = { isAdmin: true };
        // let d = { name: "Jack2" };
        // let a = { name: "John" };
        // let c = { name: "Jack1" };
        // Object.assign(d, a, b, c );
        // console.log(d);
        // console.log(Object.assign({ d: 4 }, { a: 1 }, { b: 2 }, { d: 3, b: 1 }))


        // // function demo(a, b) {
        // //     return a + b;
        // // }
        // // demo(2, 3);

        // let userOne = {
        //     firstName: "SkillSafari",
        //     lastName: "EduKeys",
        //     age: 25,
        // }
        // console.log(userOne); //
        // let userTwo = {};

        // for (let key in userOne){
        //      userTwo[key] = userOne[key]
        //     console.log(userOne[key])
        // }

        // console.log(userTwo);


        // let a = {
        //     name: "john",
        //     age: 22,
        // }

        // console.log(a)
        // let b = a;

        // // console.log(b)
        // // console.log(a)
        // b.name="santhosh"
        // // console.log(b)

        // let user={
        //     name: "jhdh",
        //     age: 23,

        // }
        // city= function(){
        //     console.log("meow")

        // }
        // // user[city]=user;
        // console.log(user)
        // user.city=city
        // // console.log(user)

        // let person = {
        //     name: "john",
        //     area: ["chennai","trl"],
        //     age: 24,
        // }
        // let newPerson = Object.assign(person)
        // // let newPerson = structuredClone(person)
        // // console.log(newPerson)

        // person.area.push("joes")
        // // console.log(person)

        // function getVoteCount(votes) {
        //     return votes.upVotes- votes.downVotes
        // }
        
        // let votes = 
        // console.log(getVoteCount(getVoteCount({ upvotes: 13, downvotes: 0 })))
        // console.log(getVoteCount({upVotes: 60, downVotes: 40}))
        

        // --------------------
        // palindrome checking 
        let str = "johnSanthosh"
        let revStr=[];
        let  j=0;
        for (let i = str.length-1 ; i>=0 ; i-- ){
            revStr[j]=str[i];
            // console.log(str[i])
            j++;
        }
        // console.log(revStr[0]=1)
        // console.log(revStr[1]=2)
        // console.log(revStr[2]=3)
        // console.log(revStr[1]="s")
        // revStr.toString
        // console.log(revStr)
        
        // let array= 
