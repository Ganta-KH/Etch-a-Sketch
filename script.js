// calculating and setting the size of the grid when the number of cells change

function setGridSize(grid, numberOfCells) {
    let gridSize = 640;

    if (gridSize % numberOfCells != 0) {
        gridSize += numberOfCells - (gridSize % numberOfCells);
    }

    grid.style.height = `${gridSize}px`;
    grid.style.width = `${gridSize}px`;
    grid.style.minWidth = `${gridSize}px`;
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

function sketchBlack(event) {
    event.target.classList.add("sketch");
}

function startSketchBlack(cells) {
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', sketchBlack);
    });
}

function stopSketchBlack(cells) {
    cells.forEach((cell) => {
        cell.removeEventListener('mouseover', sketchBlack);
    });
}

function sketch(cells) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        if (button.textContent == 'Black') {
            button.addEventListener('click', () => {
                startSketchBlack(cells);
            });
        } else if (button.textContent == 'Rainbow') {
            button.addEventListener('click', () => {
                stopSketchBlack(cells);
            });   
        }
    });
}











const grid = document.querySelector('.grid');
generateGrid(grid, 32);
const cells = document.querySelectorAll('.cell');
sketch(cells)

