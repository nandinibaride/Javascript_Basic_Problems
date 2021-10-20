/*
@purpose: To check date month and year within decided date.
@authour: Nandini.B
*/
const prompt = require('prompt-sync')();

let date = prompt("Enter day: ");
let month = prompt("Enter month: ");
let year = prompt("Enter Year: ");
console.log("Date : " + date + "/" + month + "/" + year);

date = parseInt(date);
month = parseInt(month);
year = parseInt(year);

if (month<3 || month>6) 
	console.log("False"); 
else if((date<20 && month==3) || (date>20 && month==6)) 
	console.log("False");
else
    console.log("True");