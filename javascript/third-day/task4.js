let num = 15;

if (num % 3 === 0 && num % 5 === 0)
{
    console.log("Fizz buzz");
}
else if (num % 3 === 0)
{
    console.log("Fizz");
}
else if (num % 5 === 0)
{
    console.log("Buzz");
}
else
{
    console.log(num);
}