let userPin = 1234;
let balance = 10000;

let inputPin = Number(prompt("Please enter the pin"));
let withdrawal = Number(prompt("Please enter the amount you want to withdraw"));

checkCredentials(inputPin, withdrawal);

function checkCredentials(inputPin, withdrawal)
{
    if (inputPin === userPin && withdrawal <= balance)
    {
        console.log("Transaction approved.")
        console.log(`Remaining balance: ${balance - withdrawal}`);
    }
    else if (inputPin != userPin)
    {
        console.log("Invalid Pin.");
    }
    else if (withdrawal > balance)
    {
        console.log("You do not have enough balance.");
    }
}