const navbar = document.querySelector("header");

window.addEventListener("scroll", () =>
{
    if (window.scrollY > 700)
    {
        navbar.style.backgroundColor = "rgba(29, 30, 44, 0.5)";
    }
    else if (window.scrollY <= 700)
    {
        navbar.style.backgroundColor = "rgba(29, 30, 44, 1)";
    }
});