const btn = document.querySelector("button");
const list = document.querySelector("ul");

btn.addEventListener("click", () =>
{
    if (btn.textContent === "Show menu")
    {
        list.style.display = "block";
        btn.textContent = "Hide menu";
    }
    else if (btn.textContent === "Hide menu")
    {
        list.style.display = "none";
        btn.textContent = "Show menu";
    }
});