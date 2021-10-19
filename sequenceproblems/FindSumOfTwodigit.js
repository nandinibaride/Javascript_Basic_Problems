/*
@purpose: To get averge of two digit five random number.
@authour: Nandini.B
*/
function generateRandomNumber()
{
    return Math.round(Math.random() * 90 + 10);
}
let sum = 0;
for(index = 1 ; index <=5 ; index++)
{
    let number = generateRandomNumber();
    console.log("Number" + index + " = " + number);
    sum += number;
}
console.log("Sum = " + sum);
console.log("Average = " + sum/5);
