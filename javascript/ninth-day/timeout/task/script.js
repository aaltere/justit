const modal = document.querySelector("#test");
const subBtn = document.querySelector("#subscribe");

const subTimer = setTimeout(() =>
{
    modal.showModal();
}, 20000);

subBtn.addEventListener("click", () =>
{
    clearTimeout(subTimer);
});