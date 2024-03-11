let canvas;
let ctx;

// size of the game board
const cellHeight = 20;
const cellWidth = 10;

// starting position of the pieces
const startX = 4;
const startY = 0;

// level and score
let score = 0;
let level = 1;

let winOrLose = "Playing";

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

