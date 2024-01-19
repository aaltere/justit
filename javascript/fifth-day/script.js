// Declaring a function
function greeting()
{
    console.log("Hello, World!");
}

// Call or Invoke a function
greeting();

// User login logout function
let userOnline = true;

function userStatus(status)
{
    if (status)
    {
        console.log("User is Online");
        console.log(status);
    }
    else 
    {
        console.log("User is Offline");
        console.log(status);
    }
}

userStatus(userOnline);

function atm(accountNumber, amount)
{
    console.log(`Account Number: ${accountNumber}.  Amount: ${amount}.`);
}

atm(343847345, 300);
atm(1234567, 500);

function sum(num1, num2)
{
    return num1 + num2;
}

console.log(sum(20, 10));
console.log(sum(50, 50));

// Create a function which will hello 'PersonName' that you pass as argument.

// let userName = prompt("What is your name");

// greet(userName);

// function greet(userName)
// {
//     alert(`Hello, ${userName}, how are you?`);
// }