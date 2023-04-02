// const fs = require("fs");

// fs.copyFileSync("file.txt", "f2.txt");
let superHeros = require("superheroes");

let supe = superHeros.random();

console.log(supe);

let supeVillain = require("supervillains");
console.log(supeVillain.all);
