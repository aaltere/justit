numbers = [13, 23, 12, 45, 22, 48, 66, 100];

for (const number in numbers)
{
    if (numbers[number] % 2 === 0)
    {
        console.log(numbers[number]);
    }
}