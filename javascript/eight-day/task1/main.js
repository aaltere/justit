const numField = document.querySelectorAll(".numField");
const operator = document.querySelector("#operator");
const resultField = document.querySelector("#resultField");
const resultBtn = document.querySelector("#resultBtn");

resultBtn.addEventListener("click", () =>
{
    switch(operator.value)
    {
        case "plus":
            resultField.value = Number(numField[0].value) + Number(numField[1].value);
            break;
        case "minus":
            resultField.value = Number(numField[0].value) - Number(numField[1].value);
            break;
        case "times":
            resultField.value = Number(numField[0].value) * Number(numField[1].value);
            break;
        case "divide":
            resultField.value = Number(numField[0].value) / Number(numField[1].value);
            break;
    }
});