const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const windowWidth = (canvas.width = window.innerWidth);
const windowHeight = (canvas.height = window.innerHeight);

ctx.fillStyle = "black";
ctx.fillRect(0, 0, windowWidth, windowHeight);

ctx.strokeStyle = "cyan";
ctx.strokeRect((windowWidth / 2) - 125, (windowHeight / 2) - 250, 250, 500);

