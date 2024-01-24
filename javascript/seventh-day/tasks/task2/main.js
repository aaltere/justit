const links = document.querySelectorAll("a");

for (const link of links)
{
    const linkName = link.textContent;

    link.addEventListener("mouseover", () =>
    {
        link.textContent = linkName + " - You are here";
        link.style.backgroundColor = "cyan";
    });

    link.addEventListener("mouseout", () =>
    {
        link.textContent = linkName;
        link.style.backgroundColor = "white";
    });
}