let i = 10;

console.log(i--);

const intervalID = setInterval(() => 
{
    console.log(i--);

    if (i < 0)
    {
        clearInterval(intervalID);
    }
}, 1000);