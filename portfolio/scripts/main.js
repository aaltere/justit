// Get reference to canvas and brush
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Get window height and width
const windowWidth = (canvas.width = window.innerWidth);
const windowHeight = (canvas.height = window.innerHeight);

// Fill screen black
ctx.fillStyle = "black";
ctx.fillRect(0, 0, windowWidth, windowHeight);

// Set game window width, height, and the number of blocks per direction
const gameWidth = 250;
const gameHeight = 500;

const yBlock = 20;
const xBlock = 10;

// Get location for where game window starts
const gameWindowXStart = (windowWidth / 2) - (gameWidth / 2);
const gameWindowYStart = (windowHeight / 2) - (gameHeight / 2);

// Draw game border
ctx.strokeStyle = "cyan";
ctx.strokeRect(gameWindowXStart, gameWindowYStart, gameWidth, gameHeight);

// Create array for game area and assign O to all
let gameArea = [];

for (let i = 0; i < yBlock; i++)
{
    gameArea[i] = new Array(xBlock);

    for (let j = 0; j < xBlock; j++)
    {
        gameArea[i][j] = "-";
    }
}

gameLoop();

function gameLoop()
{
    drawGame(gameArea);

    requestAnimationFrame(gameLoop);
}

// Function for drawing the game
function drawGame(gameArea)
{
    // Loop through array to see if it holds part of a piece
    for (let i = 0; i < yBlock; i++)
    {
        for (let j = 0; j < xBlock; j++)
        {
            // Check if part of a piece is being held
            if (gameArea[i][j] !== "-")
            {
                // Change colour depending on which piece
                switch (gameArea[i][j])
                {
                    case "I":
                        ctx.fillStyle = "cyan";
                        break;
                    case "O":
                        ctx.fillStyle = "yellow";
                        break;
                    case "T":
                        ctx.fillStyle = "magenta";
                        break;
                    case "J":
                        ctx.fillStyle = "blue";
                        break;
                    case "L":
                        ctx.fillStyle = "orange";
                        break;
                    case "S":
                        ctx.fillStyle = "green";
                        break;
                    case "Z":
                        ctx.fillStyle = "red";
                        break;
                }

                // Fill in the corresponding square
                ctx.fillRect(gameWindowXStart + (25 * j), gameWindowYStart + (25 * i), 25, 25);
            }
        }
    }
}

function randomPiece()
{
    return Math.floor(Math.random() * 7);
}