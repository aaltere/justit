// Single line comment

/*
 * Multi line
 * Comment
 */

console.log("Welcome to JavaScript");
console.log(10 / 5);
console.warn("Warning");
console.error("Error message");

// alert("Do you want to continue");

let num1; // Variable declaration
num1 = 10;  // Variable initialization

console.log(num1);

// Declaring and initializing a variable on the same line
let num2 = 50;

console.log(num2);

// There are four ways to create a variable in JS

// Let

let number1 = 10;
console.log(number1);

number1 = 20;
console.log(number1);

// Var

var number2 = 10;
var number2 = 20;
{
    var number2 = 30;
}

console.log(number2);

// Const

const number3 = 10;

// Shows error as shouldn't be re-assign
// number3 = 20;