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

// Location and type of player control piece
let blockLocation = new Array(4);
let blockType = randomPiece();

// Draw game border
ctx.strokeStyle = "cyan";
ctx.strokeRect(gameWindowXStart, gameWindowYStart, gameWidth, gameHeight);

// Create array for game area and assign - to all
let gameArea = [];

for (let i = 0; i < yBlock; i++)
{
    gameArea[i] = new Array(xBlock);

    for (let j = 0; j < xBlock; j++)
    {
        gameArea[i][j] = "-";
    }
}

spawnBlock(gameArea, blockLocation, blockType);
dropPiece(gameArea, blockLocation, blockType);

// Listens to player input and check if they are the arrow keys left / right
// If yes move the piece left / right accordingly
window.addEventListener("keydown", e =>
{
    switch (e.key)
    {
        case "ArrowLeft":
            // Remove old position and move cordinates left
            for (let i = 0; i < 4; i++)
            {
                gameArea[blockLocation[i][0]][blockLocation[i][1]] = "-";
                blockLocation[i][1]--;
            }

            // Assign new cordinates to game board
            for (let i = 0; i < 4; i++)
            {
                gameArea[blockLocation[i][0]][blockLocation[i][1]] = blockType;
            }
            break;
        case "ArrowRight":
            // Remove old position and move cordinates right
            for (let i = 0; i < 4; i++)
            {
                gameArea[blockLocation[i][0]][blockLocation[i][1]] = "-";
                blockLocation[i][1]++;
            }

            // Assign new cordinates to game board
            for (let i = 0; i < 4; i++)
            {
                gameArea[blockLocation[i][0]][blockLocation[i][1]] = blockType;
            }
            break;
    }
});

// Call animation loop function
gameLoop();

// Function for updating game's frames
function gameLoop()
{
    drawGame(gameArea);

    requestAnimationFrame(gameLoop);
}

// Function for assinging piece positions
function spawnBlock(gameArea, blockLocation, blockType)
{
    // Set spawn cordinates
    switch(blockType)
    {
        case "I":
            blockLocation[0] = [0, 3];
            blockLocation[1] = [0, 4];
            blockLocation[2] = [0, 5];
            blockLocation[3] = [0, 6];
            break;
        case "O":
            blockLocation[0] = [0, 4];
            blockLocation[1] = [0, 5];
            blockLocation[2] = [1, 4];
            blockLocation[3] = [1, 5];
            break;
        case "T":
            blockLocation[0] = [0, 4];
            blockLocation[1] = [1, 3];
            blockLocation[2] = [1, 4];
            blockLocation[3] = [1, 5];
            break;
        case "J":
            blockLocation[0] = [0, 3];
            blockLocation[1] = [1, 3];
            blockLocation[2] = [1, 4];
            blockLocation[3] = [1, 5];
            break;
        case "L":
            blockLocation[0] = [0, 5];
            blockLocation[1] = [1, 3];
            blockLocation[2] = [1, 4];
            blockLocation[3] = [1, 5];
            break;
        case "S":
            blockLocation[0] = [0, 4];
            blockLocation[1] = [0, 5];
            blockLocation[2] = [1, 3];
            blockLocation[3] = [1, 4];
            break;
        case "Z":
            blockLocation[0] = [0, 3];
            blockLocation[1] = [0, 4];
            blockLocation[2] = [1, 4];
            blockLocation[3] = [1, 5];
            break;
    }

    // Add piece to game board
    for (let i = 0; i < 4; i++)
    {
        gameArea[blockLocation[i][0]][blockLocation[i][1]] = blockType;
    }
}

// Function to drop the piece as time goes
function dropPiece(gameArea, blockLocation, blockType)
{
    // Set timer for every 1 second
    const pieceDrop = setInterval(() =>
    {
        // Clear old position on the board and gives new cordinates
        for (let i = 0; i < 4; i++)
        {
            gameArea[blockLocation[i][0]][blockLocation[i][1]] = "-";
            blockLocation[i][0]++;
        }

        // Assign new cordinates to game board
        for (let i = 0; i < 4; i++)
        {
            gameArea[blockLocation[i][0]][blockLocation[i][1]] = blockType;
        }

        window.addEventListener("keypress", e =>
        {
            if (e.key === "k")
            {
                clearInterval(pieceDrop);
            }
        });
    }, 1000);
}

// Function for drawing the game
function drawGame(gameArea)
{
    // Loop through array to see if it holds part of a piece
    for (let i = 0; i < yBlock; i++)
    {
        for (let j = 0; j < xBlock; j++)
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
                case "-":
                    ctx.fillStyle = "black";
                    break;
            }

            // Fill in the corresponding square
            ctx.fillRect(gameWindowXStart + (25 * j), gameWindowYStart + (25 * i), 25, 25);
        }
    }
}

// Ruturn a random tetrimino piece
function randomPiece()
{
    let blockType;

    switch(Math.floor(Math.random() * 7))
    {
        case 0:
            blockType = "I";
            break;
        case 1:
            blockType = "O";
            break;
        case 2:
            blockType = "T";
            break;
        case 3:
            blockType = "J";
            break;
        case 4:
            blockType = "L";
            break;
        case 5:
            blockType = "S";
            break;
        case 6:
            blockType = "Z";
            break;
    }

    return blockType;
}