function person(a,b){
    
    this.a= a;
    this.b= b;
    return a,b
}

let person1 = new person("john", "santosh")
console.log(person1)
let person12 = new person("jj", "santosh")
console.log(person12)

function userDetails(a,b) { 
            return {
                a: a,
                b: b,
            }
        }
        let aac = userDetails("john", "santosh");
        console.log(aac)