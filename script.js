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
    cell.style.height = `${cellSize-0}px`;
    cell.style.width = `${cellSize-0}px`;
}

// function that generate the grid of divs 
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


// sketch in black color functions
function sketchBlack(event) {
    event.target.style.backgroundColor = "black";
}

 // function that start sketching in black when the mouse hover over the grid
function startSketchBlack(cells) {
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', sketchBlack);
    });
}

// function that stop black color sketching
function stopSketchBlack(cells) {
    cells.forEach((cell) => {
        cell.removeEventListener('mouseover', sketchBlack);
    });
}


// eraser function that eraser what have been drawn in the grid
function eraser(event) {
    event.target.style.backgroundColor = null;
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

// function the clear the grid
function clear(cells) {
    cells.forEach((cell) => {
        cell.style.backgroundColor = null;
    })
}


// rainbow sketching methods
function rainbowSketch(event) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = 'rgb(' + [red,green,blue].join(',') + ')'; //`rgb(${red}, ${green}, ${blue});`;
}

function startRainbowSketch(cells) {
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', rainbowSketch);
    });
}

function stopRainbowSketch(cells) {
    cells.forEach((cell) => {
        cell.removeEventListener('mouseover', rainbowSketch);
    })
}


function sketch(cells) {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((button) => {
        if (button.textContent == 'Black') {
            button.addEventListener('click', () => {
                stopEraser(cells);
                stopRainbowSketch(cells);
                startSketchBlack(cells);
            });
        } else if (button.textContent == 'Rainbow') {
            button.addEventListener('click', () => {
                stopEraser(cells);
                stopSketchBlack(cells);
                startRainbowSketch(cells)
            });
        } else if (button.textContent == 'Eraser') {
            button.addEventListener('click', () => {
                stopSketchBlack(cells);
                stopRainbowSketch(cells);
                startEraser(cells);
            });
        } else if (button.textContent == 'Clear') {
            button.addEventListener('click', () => {
                stopEraser(cells);
                stopSketchBlack(cells);
                stopRainbowSketch(cells);
                clear(cells);
            });
        }
    });
}

function removeDiv(cells) {
    cells.forEach((cell) => {
        cell.remove();
    })
}







const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
slider.value = 16;
output.innerHTML = slider.value + ' x ' + slider.value;
const grid = document.querySelector('.grid');
generateGrid(grid, slider.value);
const cells = document.querySelectorAll('.cell');
sketch(cells)

slider.oninput = function() {
  output.innerHTML = slider.value + ' x ' + slider.value;
  const cs = document.querySelectorAll('.cell');
  removeDiv(cs);
  generateGrid(grid, slider.value);
  const cells = document.querySelectorAll('.cell');
  sketch(cells)
}


