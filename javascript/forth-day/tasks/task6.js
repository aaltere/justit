numbers = [23, 56, 4, 78, 5, 63, 45, 210, 56];

for (let i = 0; i < numbers.length; i++)
{
    for (let j = 0; j < numbers.length; j++)
    {
        if (numbers[i] === numbers[j] && i !== j)
        {
            numbers.splice(j, 1);
        }
    }
}

console.log(numbers);