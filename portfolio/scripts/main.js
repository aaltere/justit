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

// Call animation loop function
gameLoop();

// Function for updating game's frames
function gameLoop()
{
    drawGame(gameArea);

    requestAnimationFrame(gameLoop);
}

// Function for assinging piece positions
function spawnBlock()
{
    let blockLocation = new Array(4);
    let piece = randomPiece();

    switch(piece)
    {
        case 0:
            blockLocation[0] = [0, 3];
            blockLocation[1] = [0, 4];
            blockLocation[2] = [0, 5];
            blockLocation[3] = [0, 6];
            break;
        case 1:
            blockLocation[0] = [0, 4];
            blockLocation[1] = [0, 5];
            blockLocation[2] = [1, 4];
            blockLocation[3] = [1, 5];
            break;
        case 2:
            blockLocation[0] = [0, 4];
            blockLocation[1] = [1, 3];
            blockLocation[2] = [1, 4];
            blockLocation[3] = [1, 5];
            break;
        case 3:
            blockLocation[0] = [0, 3];
            blockLocation[1] = [1, 3];
            blockLocation[2] = [1, 4];
            blockLocation[3] = [1, 5];
            break;
        case 4:
            blockLocation[0] = [0, 5];
            blockLocation[1] = [1, 3];
            blockLocation[2] = [1, 4];
            blockLocation[3] = [1, 5];
            break;
        case 5:
            blockLocation[0] = [0, 4];
            blockLocation[1] = [0, 5];
            blockLocation[2] = [1, 3];
            blockLocation[3] = [1, 4];
            break;
        case 6:
            blockLocation[0] = [0, 3];
            blockLocation[1] = [0, 4];
            blockLocation[2] = [1, 4];
            blockLocation[3] = [1, 5];
            break;
    }

    return blockLocation;
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

// Ruturn a random tetrimino piece
function randomPiece()
{
    return Math.floor(Math.random() * 7);
}