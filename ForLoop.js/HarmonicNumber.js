/*
@purpose: Get Harmonic number 1/1 + 1/2 + 1/3 ......
@authour: Nandini.B
*/
const prompt = require("prompt-sync")();
let number = prompt("Enter Nth Number: ");

let result = 0;
for(let index=1; index<=number; index++)
{
    result += (1 / index);
}
console.log(number + "th Harmonic Number is : " + result.toFixed(2));