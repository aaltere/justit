for (let i = 0; i < 5; i++)
{
    let num = Math.ceil(Math.random() * 50);

    if (num % 5 === 0)
    {
        console.log(`The number ${num} is divisible by 5`);
    }
    else 
    {
        console.log(`The number ${num} is not divisible by 5`);
    }
}