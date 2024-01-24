const input = document.querySelector("input");

input.addEventListener("keypress", () =>
{
    input.style.backgroundColor = randomColor();
    input.style.color = randomColor();
});

function randomColor()
{
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}