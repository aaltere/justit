const links = document.querySelectorAll("a");

for (const link of links)
{
    link.addEventListener("mouseenter", () =>
    {
        link.style.fontSize = "1.5rem";
    });

    link.addEventListener("mouseleave", () =>
    {
        link.style.fontSize = "1rem";
    });
}