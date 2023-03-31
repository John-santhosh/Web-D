function add(a,b){
    console.log(a+b)
}
function sub(a,b){
    console.log(a-b)
}
function mul(a,b){
    console.log(a*b)
}
function div(a,b){
    console.log(a/b)
}

module.exports = {
    addition : add,
    subtraction : sub ,
    multiply : mul,
    division: div
}

// export const addition = add
// export const subtraction = sub
// export const multiply = mul
// // export const division = div