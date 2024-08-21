
const gridContainer = document.querySelector('.gridContainer');



function squareGrid(num) {
    const gridOfSquares = num * num;
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for (let i = 0; i < gridOfSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        gridContainer.appendChild(square);
    }
    const grid = document.querySelector('.grid');
    grid.textContent = `${num} x ${num}`;

}

function setColour() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', (event) => {
            square.style.backgroundColor = 'black';
        });
    });
}

function setGridSize() {
    const size = prompt('Enter a grid size of your choice less than or equal to 100:');
    if (size === null || size === undefined || size ==='') {
        return;
    }
    while (size > 100) {
        size = prompt('Please enter a number less than or equal to 100');
    }
    while(gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    squareGrid(size);
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', setColour)});
}

function clearGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => { square.style.backgroundColor = null});
    const grid = document.querySelector('.grid');
    grid.textContent = '';
}

let gridNum = 16;
squareGrid(gridNum);
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
square.addEventListener('mouseover', setColour)});

const clearGridBtn = document.querySelector('.clear');
const setGridBtn = document.querySelector('.set');

clearGridBtn.addEventListener('click', clearGrid);
setGridBtn.addEventListener('click', setGridSize);

