// Get reference to canvas and brush
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Get window height and width
const windowWidth = (canvas.width = window.innerWidth);
const windowHeight = (canvas.height = window.innerHeight);

// Fill canvas black
ctx.fillStyle = "black";
ctx.fillRect(0, 0, windowWidth, windowHeight);

// Set game window width, height, and the number of tiles per direction
const gameWidth = 300;
const gameHeight = 550;

const yBlock = 22;
const xBlock = 12;

// Get cordinates for game window
const gameWindowXStart = (windowWidth / 2) - (gameWidth / 2);
const gameWindowYStart = (windowHeight / 2) - (gameHeight / 2);

// Create array for game area#
let gameArea = [];

// Assing - to empty space and # to the walls
for (let i = 0; i < yBlock; i++)
{
    gameArea[i] = new Array(xBlock);

    for (let j = 0; j < xBlock; j++)
    {
        if (j === 0 || j === xBlock - 1 || i === 0 || i === yBlock - 1)
        {
            gameArea[i][j] = "#";
        }
        else
        {
            gameArea[i][j] = "-";
        }
    }
}

// Random the type of block
let blockType = randomPiece();
// Spawn block and assign its location to blockLocation
let blockLocation = spawnBlock(gameArea, blockType);
// Set initial block state for spinning
let blockState = 1;

dropPiece(gameArea, blockLocation, blockType);

window.addEventListener("keydown", e =>
{
    // Get most left and most right cordinates of the block
    let minX = blockLocation[0][1];
    let maxX = blockLocation[0][1];

    for (let i = 1; i < 4; i++)
    {
        if (blockLocation[i][1] > maxX)
        {
            maxX = blockLocation[i][1];
        }
        else if (blockLocation[i][1] < minX)
        {
            minX = blockLocation[i][1];
        }
    }

    // Take in user input to detect left and right arrow keys
    switch (e.key)
    {
        case "ArrowLeft":
            // If block not yet next to the left wall
            if (minX > 1)
            {
                // Remove old position and move cordinates left
                for (let i = 0; i < 4; i++)
                {
                    gameArea[blockLocation[i][0]][blockLocation[i][1]] = "-";
                    blockLocation[i][1]--;
                }
            }
            break;
        case "ArrowRight":
            // If block not yet next to the right wall
            if (maxX < 10)
            {
                // Remove old position and move cordinates right
                for (let i = 0; i < 4; i++)
                {
                    gameArea[blockLocation[i][0]][blockLocation[i][1]] = "-";
                    blockLocation[i][1]++;
                }
            }
            break;
        case "ArrowUp":
            blockState = spinBlock(gameArea, blockLocation, blockType, blockState);
            break;
    }

    // Assign new cordinates to game board
    for (let i = 0; i < 4; i++)
    {
        gameArea[blockLocation[i][0]][blockLocation[i][1]] = blockType;
    }
});

// Call the main game loop
gameLoop();

// Function for the main game loop that update frames
function gameLoop()
{
    drawGame(gameArea);

    requestAnimationFrame(gameLoop);
}

// Function for spinning the block
function spinBlock(gameArea, blockLocation, blockType, blockState)
{
    
}

// Function for dropping piece
function dropPiece(gameArea, blockLocation, blockType)
{
    // Set interval for every one second
    const pieceDrop = setInterval(() =>
    {
        // Clear old position on the board and assign new cordinates
        for (let i = 0; i < 4; i++)
        {
            gameArea[blockLocation[i][0]][blockLocation[i][1]] = "-";
            blockLocation[i][0]++;
        }

        // Assign the new cordinates to game board to br drawn
        for (let i = 0; i < 4; i++)
        {
            gameArea[blockLocation[i][0]][blockLocation[i][1]] = blockType;
        }

        // Check for the lowest point of shape
        minYPoint = 0;

        for (let i = 0; i < 4; i++)
        {
            if (blockLocation[i][0] > minYPoint)
            {
                minYPoint = blockLocation[i][0];
            }
        }

        // Stop dropping the shape once reaches the wall
        if (minYPoint >= 20)
        {
            clearInterval(pieceDrop);
        }
    }, 1000);
}

// Function for assinging piece positions
function spawnBlock(gameArea, blockType)
{
    // Aray to hold block positions to be returned
    let blockLocation = new Array(4);

    // Array for holding piece spawn position
    let pieceI = [[1, 4], [1, 5], [1, 6], [1, 7]];
    let pieceO = [[1, 5], [1, 6], [2, 5], [2, 6]];
    let pieceT = [[2, 5], [1, 5], [2, 4], [2, 6]];
    let pieceJ = [[2, 5], [1, 4], [2, 4], [2, 6]];
    let pieceL = [[2, 5], [1, 6], [2, 4], [2, 6]];
    let pieceS = [[2, 5], [1, 5], [1, 6], [2, 4]];
    let pieceZ = [[2, 5], [1, 4], [1, 5], [2, 6]];

    // Set spawn cordinates
    switch(blockType)
    {
        case "I":
            blockLocation = pieceI;
            break;
        case "O":
            blockLocation = pieceO;
            break;
        case "T":
            blockLocation = pieceT;
            break;
        case "J":
            blockLocation = pieceJ;
            break;
        case "L":
            blockLocation = pieceL;
            break;
        case "S":
            blockLocation = pieceS;
            break;
        case "Z":
            blockLocation = pieceZ;
            break;
    }

    // Add piece to game board
    for (let i = 0; i < 4; i++)
    {
        gameArea[blockLocation[i][0]][blockLocation[i][1]] = blockType;
    }

    // Return the initial state for spinning block
    return blockLocation;
}

// Function for drawing the game
function drawGame(gameArea)
{
    // Loop through array to see if what value is held
    for (let i = 0; i < yBlock; i++)
    {
        for (let j = 0; j < xBlock; j++)
        {
            // Change colour depending on the value of the array
            switch(gameArea[i][j])
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
                case "#":
                    ctx.fillStyle = "grey"
            }

            // Fill in the corresponding square
            ctx.fillRect(gameWindowXStart + (25 * j), 
            gameWindowYStart + (25 * i), 25, 25);
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