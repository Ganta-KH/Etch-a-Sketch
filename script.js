const grid = document.querySelector('.grid');

// calculating and setting the size of the grid when the number of box change

let gridSize = 640;
let box = 16;

if (gridSize % box != 0) {
    gridSize += box - (gridSize % box);
} 

let divSize = gridSize / box;

grid.style.height = `${gridSize}px`;
grid.style.width = `${gridSize}px`;

