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