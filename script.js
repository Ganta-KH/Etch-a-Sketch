// calculating and setting the size of the grid when the number of box change

function setGridSize(grid, numberOfBox) {
    let gridSize = 640;

    if (gridSize % numberOfBox != 0) {
        gridSize += numberOfBox - (gridSize % numberOfBox);
    }

    grid.style.height = `${gridSize}px`;
    grid.style.width = `${gridSize}px`;
}


function getDivSize(gridSize, numberOfBox) {
    return parseInt(gridSize.slice(0, gridSize.length - 2)) / numberOfBox;
}


function setBoxSize(box, divSize) {
    box.style.height = `${divSize-2}px`;
    box.style.width = `${divSize-2}px`;
}


function generateGrid(grid, numberOfBox) {
    setGridSize(grid, numberOfBox);
    
    for(let i = 0; i<numberOfBox**2; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        grid.appendChild(div);
    }

    const box = document.querySelectorAll('.box');
    box.forEach((b) => {
        setBoxSize(b, getDivSize(grid.style.height, numberOfBox))
    })
    

    
}


const grid = document.querySelector('.grid');
generateGrid(grid, 16);



