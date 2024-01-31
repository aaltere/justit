const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const windowWidth = (canvas.width = window.innerWidth);
const windowHeight = (canvas.height = window.innerHeight);

ctx.fillStyle = "black";
ctx.fillRect(0, 0, windowWidth, windowHeight);