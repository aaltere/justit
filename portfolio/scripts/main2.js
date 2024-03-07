const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const windowWidth = (canvas.width = window.innerWidth);
const windowHeight = (canvas.height = window.innerHeight);

ctx.fillStyle = "black";
ctx.fillRect(0, 0, windowWidth, windowHeight);

const gameWidth = 300;
const gameHeight = 550;

const yBlock = 22;
const xBlock = 12;

const gameWindowXStart = (windowWidth / 2) - (gameWidth / 2);
const gameWindowYStart = (windowHeight / 2) - (gameHeight / 2);

let gameArea = [];

for (let i = 0; i < yBlock; i++)
{
    gameArea[i] = new Array(xBlock);

    for (let j = 0; j < xBlock; j++)
    {
        gameArea[i][j] = "-";
    }
}

console.log(gameArea);