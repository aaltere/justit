// value to hold references for drawing the game
let canvas;
let ctx;

// size of the game board
const cellHeight = 20;
const cellWidth = 12;

// starting position of the pieces
let startX = 4;
let startY = 0;

// score
let score = 0;

// text of the game current state
let winOrLose = "Playing";

let coordinateArray = [...Array(cellHeight)].map(e =>
    Array(cellWidth).fill(0));
let currentPiece = [[1, 0], [0, 1], [1, 1], [2, 1]];

const directions = {
    idle: 0,
    down: 1,
    left: 2,
    right: 3
};
let direction;

// array to hold the pieces and their colours
let pieces = [];
let piecesColours = [
    "cyan", "yellow", "magenta", "blue", "orange", 
    "green", "red"
];
// variable for holding current colour for rendering
let currentColour;

// array for the game board
let gameBoard = [...Array(cellHeight)].map(e => 
    Array(cellWidth).fill(0));

// array for storing the stopped shapes
let stoppedGameBoard = [...Array(cellHeight)].map(e => 
    Array(cellWidth).fill(0));

class Coordinates
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
}

function createCoordinateArray()
{
    for (let y = 9, j = 0; y <= 446; y += 23, j++)
    {
        for (let x = 11, i = 0; x <= 264; x += 23, i++)
        {
            coordinateArray[i][j] = new Coordinates(x, y);
        }
    }
}

// on document load call setupCanvas function
document.addEventListener("DOMContentLoaded", () =>
{
    // have initial value hold reference to the drawing object
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    // size of the canvas
    canvas.width = 936;
    canvas.height = 956;

    ctx.scale(2, 2);

    // draw the background for the game
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw the game border
    ctx.strokeStyle = "grey";
    ctx.strokeRect(8, 8, 280, 462);

    // add text to the side of the game window
    // this holds score
    // game state
    // controls
    ctx.fillStyle = "white";
    ctx.font = "21px Arial";
    ctx.fillText("SCORE", 300, 98);
    ctx.strokeRect(300, 107, 161, 24);
    ctx.fillText(score.toString(), 310, 127);

    ctx.fillText("WIN / LOSE", 300, 221);
    ctx.fillText(winOrLose, 310, 261);
    ctx.strokeRect(300, 232, 161, 95);

    ctx.fillText("CONTROLS", 300, 354);
    ctx.strokeRect(300, 366, 161, 104);

    ctx.font = "16px Arial";
    ctx.fillText("A - Left", 305, 388);
    ctx.fillText("D - Right", 305, 413);
    ctx.fillText("W - Rotate clockwise", 305, 438);
    ctx.fillText("S - Down", 305, 463);

    document.addEventListener("keydown", keyPress);

    createPieces();
    createPiece();

    createCoordinateArray();

    drawPiece();
});

function createPieces()
{
    pieces.push([[0, 0], [1, 0], [2, 0], [3, 0]]);
    pieces.push([[0, 0], [1, 0], [0, 1], [1, 1]]);
    pieces.push([[1, 0], [0, 1], [1, 1], [2, 1]]);
    pieces.push([[0, 0], [0, 1], [1, 1], [2, 1]]);
    pieces.push([[2, 0], [0, 1], [1, 1], [2, 1]]);
    pieces.push([[1, 0], [2, 0], [0, 1], [1, 1]]);
    pieces.push([[0, 0], [1, 0], [1, 1], [2, 1]]);
}

function createPiece()
{
    let randomPiece = Math.floor(Math.random() * pieces.length);
    currentPiece = pieces[randomPiece];
    currentColour = piecesColours[randomPiece];
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

function deletePiece()
{
    for (let i = 0; i < currentPiece.length; i++)
    {
        let x = currentPiece[i][0] + startX;
        let y = currentPiece[i][1] + startY;

        gameBoard[x][y] = 0;

        let coorX = coordinateArray[x][y].x;
        let coorY = coordinateArray[x][y].y;
        ctx.fillStyle = "black";
        ctx.fillRect(coorX, coorY, 21, 21);
    }
}

function keyPress(key)
{
    if (winOrLose != "Game Over")
    {
        if (key.key === "ArrowLeft")
        {
            direction = directions.left;
            if (!hittingWall() && !horizontalCollision())
            {
                deletePiece();
                startX--;
                drawPiece();
            }
        }
        else if (key.key === "ArrowRight")
        {
            direction = directions.right;
            if (!hittingWall() && !horizontalCollision())
            {
                deletePiece();
                startX++;
                drawPiece();
            }
        }
        else if (key.key === "ArrowUp")
        {
            rotatePiece();
        }    
        else if (key.key === "ArrowDown")
        {
            pieceDrop();
        }
    }
}

function rotatePiece()
{
    let rotation = new Array();
    let pieceCopy = currentPiece;
    let pieceBackup;

    for (let i = 0; i < pieceCopy.length; i++)
    {
        pieceBackup = [...currentPiece];
        let x = pieceCopy[i][0];
        let y = pieceCopy[i][1];

        let newX = (lastSquareX() - y);
        let newY = x;
        rotation.push([newX, newY]);
    }
    deletePiece();

    try 
    {
        currentPiece = rotation;
        drawPiece();
    }
    catch (e)
    {
        if (e instanceof TypeError)
        {
            currentPiece = pieceBackup;
            deletePiece();
            drawPiece();
        }
    }
}

function pieceDrop()
{
    direction = directions.down;

    if (!verticalCollision())
    {
        deletePiece();
        startY++;
        drawPiece();
    }
}

window.setInterval(() =>
{
    if (winOrLose != "Game Over")
    {
        pieceDrop();
    }
}, 1000);

// fucntion to check if the piece is already at the wall
// if yes the function will return true
function hittingWall()
{
    for (let i = 0; i < currentPiece.length; i++)
    {
        let newX = currentPiece[i][0] + startX;
        
        if (newX <= 0 && direction === directions.left)
        {
            return true;
        }
        else if (newX >= 11 && direction === directions.right)
        {
            return true;
        }
    }
    return false;
}

function horizontalCollision()
{
    let pieceCopy = currentPiece;
    let collision = false;

    for (let i = 0; i < pieceCopy.length; i++)
    {
        let square = pieceCopy[i];
        let x = square[0] + startX;
        let y = square[1] + startY;

        if (direction === directions.left)
        {
            x--;
        }
        else if (direction === directions.right)
        {
            x++;
        }

        let stoppedValue = stoppedGameBoard[x][y];

        if (typeof stoppedValue === "string")
        {
            collision = true;
            break;
        }
    }

    return collision;
}

function verticalCollision()
{
    let pieceCopy = currentPiece;
    let collision = false;

    for (let i = 0; i < pieceCopy.length; i++)
    {
        let square = pieceCopy[i];
        let x = square[0] + startX;
        let y = square[1] + startY;

        if (direction === directions.down)
        {
            y++;
        }

        if (typeof stoppedGameBoard[x][y + 1] === "string")
        {
            deletePiece();
            startY++;
            drawPiece();
            collision = true;
            break;
        }

        if (y >= 20)
        {
            collision = true;
            break;
        }
    }

    if (collision)
    {
        if (startY <= 2)
        {
            winOrLose = "Game Over";

            ctx.fillStyle = "Black";
            ctx.fillRect(310, 242, 140, 30);
            ctx.fillStyle = "White";
            ctx.fillText(winOrLose, 310, 261);
        }
        else
        {
            for (let i = 0; i < pieceCopy.length; i++)
            {
                let square = pieceCopy[i];
                let x = square[0] + startX;
                let y = square[1] + startY;

                stoppedGameBoard[x][y] = currentColour;
            }

            checkFullRow();

            createPiece();

            direction = directions.idle;
            startX = 4;
            startY = 0;
            drawPiece();
        }
    }
}

function lastSquareX()
{
    let lastX = 0;

    for (let i = 0; i < currentPiece.length; i++)
    {
        let square = currentPiece[i];

        if (square[0] > lastX)
        {
            lastX = square[0];
        }
    }

    return lastX;
}

function checkFullRow()
{
    let rowsToDelete = 0;
    let startOfDeletion = 0;

    for (let y = 0; y < cellHeight; y++)
    {
        let completed = true;

        for (let x = 0; x < cellWidth; x++)
        {
            let square = stoppedGameBoard[x][y];

            if (square === 0 || (typeof square === "undefined"))
            {
                completed = false;
                break;
            }
        }

        if (completed)
        {
            if (startOfDeletion === 0)
            {
                startOfDeletion = y;
            }
            rowsToDelete++;

            for (let i = 0; i < cellWidth; i++)
            {
                stoppedGameBoard[i][y] = 0;
                gameBoard[i][y] = 0;

                let coorX = coordinateArray[i][y].x;
                let coorY = coordinateArray[i][y].y;

                ctx.fillStyle = "black";
                ctx.fillRect(coorX, coorY, 21, 21);
            }
        }
    }

    if (rowsToDelete > 0)
    {
        score += (10 * rowsToDelete);
        ctx.fillStyle = "black";
        ctx.fillRect(310, 109, 140, 19);
        ctx.fillStyle = "white";
        ctx.fillText(score.toString(), 310, 127);

        moveRowsDown(rowsToDelete, startOfDeletion);
    }
}

function moveRowsDown(rowsToDelete, startOfDeletion)
{
    for (let i = startOfDeletion - 1;i >= 0; i--)
    {
        for (let x = 0; x < cellWidth; x++)
        {
            let y2 = i + rowsToDelete;
            let square = stoppedGameBoard[x][i];
            let nextSquare = stoppedGameBoard[x][y2];

            if (typeof square === "string")
            {
                nextSquare = square;
                gameBoard[x][y2] = 1;
                stoppedGameBoard[x][y2] = square;

                let coorX = coordinateArray[x][y2].x;
                let coorY = coordinateArray[x][y2].y;
                ctx.fillStyle = nextSquare;
                ctx.fillRect(coorX, coorY, 21, 21);

                square = 0;
                gameBoard[x][i] = 0;
                stoppedGameBoard[x][i] = 0;
                coorX = coordinateArray[x][i].x;
                coorY = coordinateArray[x][i].y;
                ctx.fillStyle = "black";
                ctx.fillRect(coorX, coorY, 21, 21);
            }
        }
    }
}