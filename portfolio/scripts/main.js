const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const windowWidth = (canvas.width = window.innerWidth);
const windowHeight = (canvas.height = window.innerHeight);

ctx.fillStyle = "black";
ctx.fillRect(0, 0, windowWidth, windowHeight);

const gameWidth = 250;
const gameHeight = 500;

const gameWindowXStart = (windowWidth / 2) - (gameWidth / 2);
const gameWindowYStart = (windowHeight / 2) - (gameHeight / 2);

ctx.strokeStyle = "cyan";
ctx.strokeRect(gameWindowXStart, gameWindowYStart, gameWidth, gameHeight);