/*
@purpose: use random function to get tow dice number and their sum.
@authour: Nandini.B
*/
let dice1 = (Math.floor(Math.random() * 6) + 1);
let dice2 = (Math.floor(Math.random() * 6) + 1);
let sum = dice1 + dice2;
console.log("Dice number 1 is : " + dice1);
console.log("Dice number 2 is : " + dice2);
console.log("Sum of both the dice numbers are : " + sum);