const divDate = document.querySelector("#date");

const d = new Date();

const date = d.toLocaleString("default", 
{
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h24"
});

divDate.textContent = date;