// calculating and setting the size of the grid when the number of cells change

function setGridSize(grid, numberOfCells) {
    let gridSize = 640;

    if (gridSize % numberOfCells != 0) {
        gridSize += numberOfCells - (gridSize % numberOfCells);
    }

    grid.style.height = `${gridSize}px`;
    grid.style.width = `${gridSize}px`;
}


function getCellSize(gridSize, numberOfCells) {
    return parseInt(gridSize.slice(0, gridSize.length - 2)) / numberOfCells;
}


function setCellSize(cell, cellSize) {
    cell.style.height = `${cellSize-2}px`;
    cell.style.width = `${cellSize-2}px`;
}


function generateGrid(grid, numberOfCells) {
    setGridSize(grid, numberOfCells);
    
    for(let i = 0; i<numberOfCells**2; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        grid.appendChild(div);
    }

    const cell = document.querySelectorAll('.cell');
    cell.forEach((b) => {
        setCellSize(b, getCellSize(grid.style.height, numberOfCells))
    })
}


function sketchBlack(cells) {
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add("sketch");
        });
    });
}


const grid = document.querySelector('.grid');
generateGrid(grid, 32);
const cells = document.querySelectorAll('.cell');
sketchBlack(cells)





