/*
@purpose: Print the table of two using for loop.
@authour: Nandini.B
*/
const prompt = require("prompt-sync")();

const number = prompt("Enter a range: ");

for(i = 1; i <= number; i++)
{
    console.log(Math.pow(2,i));
}