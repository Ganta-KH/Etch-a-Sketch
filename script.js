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
    event.target.classList.add("black");
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



function eraser(event) {
    event.target.classList.remove("black");
}

function startEraser(cells) {
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', eraser);
    });
}

function stopEraser(cells) {
    cells.forEach((cell) => {
        cell.removeEventListener('mouseover', eraser);
    });
}


function sketch(cells) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        if (button.textContent == 'Black') {
            button.addEventListener('click', () => {
                stopEraser(cells);
                startSketchBlack(cells);
            });
        } else if (button.textContent == 'Rainbow') {
            button.addEventListener('click', () => {
                startEraser(cells)
                stopSketchBlack(cells);
            })
        } else if (button.textContent == 'Eraser' {
            
        })
    });
}











const grid = document.querySelector('.grid');
generateGrid(grid, 64);
const cells = document.querySelectorAll('.cell');
sketch(cells)

