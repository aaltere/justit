// + addition
// - subtraction
// * multiplication
// / division
// % modular
// ++ increment
// -- decrement
// = assignment
// == equal to
// === exact same
// > greater than
// < less than
// >= greater than or equal
// <= less than or equal

// && and
// || or
// ! not

let a = 10;
console.log(++a);

let trafficLight = "Red";

if (trafficLight === "Red")
{
    console.log("Stop behind the line, the light is red!");
}
else if (trafficLight === "Amber")
{
    console.log("Stop behind the line!");
}
else
{
    console.log("The light could be green, you can cross!");
}

let age = 18;

if (age >= 18)
{
    console.log("You are eligible to vote");
}
else if (age >= 0)
{
    console.log("You are not eligible to vote");
}
else
{
    console.log("Invalid age");
}

let day = "Monday";

switch (day)
{
    case "Monday":
        console.log("Happy Monday");
        break;
    case "Tuesday":
        console.log("Second day of the week");
        break;
    case "Wednesday":
        console.log("Midway through the week!");
        break;
    case "Thursday":
        console.log("It's almost Friday");
        break;
    case "Friday":
        console.log("Happy Friday!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
    default:
        console.log("Invalid day, try again")
}