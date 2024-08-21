
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

Squares();

