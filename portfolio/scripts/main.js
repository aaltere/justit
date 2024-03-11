// value to hold references for drawing the game
let canvas;
let ctx;

// size of game board
const gameWidth = 250;
const gameHeight = 500;

// size of the game board
const cellHeight = 20;
const cellWidth = 10;

// starting position of the pieces
const startX = 4;
const startY = 0;

// level and score
let score = 0;
let level = 1;

// text of the game current state
let winOrLose = "Playing";

let coordinateArray = [...Array(cellHeight)].map(e =>
    Array(cellWidth).fill(0));
let currentPiece = new Array(4);

const directions = {
    idle: 0,
    down: 1,
    left: 2,
    right: 3
}
let direction;

// array to hold the pieces and their colours
let pieces = [];
let piecesColours = [
    "cyan", "yellow", "magenta", "blue", "orange", 
    "green", "red"
]
// variable for holding current colour for rendering
let currentColour;

// array for the game board
let gameBoard = [...Array(cellHeight)].map(e => 
    Array(cellWidth).fill(0))

// array for storing the stopped shapes
let stoppedGameBoard = [...Array(cellHeight)].map(e => 
    Array(cellWidth).fill(0))

// on document load call setupCanvas function
document.addEventListener("DOMContentLoaded", setupCanvas);

// function for setting up the game window
function setupCanvas()
{
    // have initial value hold reference to the drawing object
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    // size of the canvas
    const windowWidth = (canvas.width = window.innerWidth);
    const windowHeight = (canvas.height = window.innerHeight);

    // draw the background for the game
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, windowWidth, windowHeight);

    // Get cordinates for game window
    const gameWindowXStart = (windowWidth / 2) - (gameWidth / 2);
    const gameWindowYStart = (windowHeight / 2) - (gameHeight / 2);

    // draw the game border
    ctx.strokeStyle = "grey";
    ctx.strokeRect(gameWindowXStart, gameWindowYStart, 
        gameWidth, gameHeight);

    // add text to the side of the game window
    // this holds score
    // game state
    // controls
    // ctx.fillStyle = "white";
    // ctx.font = "24px Arial";
    // ctx.fillText("SCORE", 300, 989);
    // ctx.strokeRect(300, 107, 161, 24);
    // ctx.fillText(score.toString(), 310, 127);

    // ctx.fillText("LEVEL", 300, 157);
    // ctx.strokeRect(300, 171, 161, 24);

    // ctx.fillText("WIN / LOSE", 300, 221);
    // ctx.fillText(winOrLose, 310, 261);
    // ctx.strokeRect(300, 232, 161, 95);

    // ctx.fillText("CONTROLS", 300, 354);
    // ctx.strokeRect(300, 366, 161, 104);

    // ctx.font = "18px Arial";
    // ctx.fillText("Arrow Left - Left", 310, 388);
    // ctx.fillText("Arrow Right - Right", 310, 413);
    // ctx.fillText("Arrow Up - Rotate clockwise", 310, 438);
    // ctx.fillText("Arrow Down - Down", 310, 463);
}

function drawPiece()
{
    for (let i = 0; i < currentPiece.length; i++)
    {
        let x = currentPiece[i][0] + startX;
        let y = currentPiece[i][1] + startY;

        gameBoard[x][y] = 1;

        let coorX = coordinateArray[x][y].x;
        let coorY = coordinateArray[x][y].y;

        ctx.fillStyle = currentColour;
        ctx.fillRect(coorX, coorY, 21, 21);
    }
}

function keyPress(key)
{
    if (winOrLose != "Game Over")
    {
        if (key === "ArrowLeft")
        {
            direction = directions.left;
            if (!hittingWall() && !horizontalCollistion())
            {
                deletePiece();
                startX--;
                drawPiece();
            }
        }
        else if (key === "ArrowRight")
        {
            direction = directions.right;
            if (!hittingWall() && !horizontalCollistion())
            {
                deletePiece();
                startX--;
                drawPiece();
            }
        }
    }
}