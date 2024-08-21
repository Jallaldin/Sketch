const gridContainer = document.querySelector('.gridContainer');


function Squares() {
    const squareGrid = 16;
    for (let i = 0; i < squareGrid; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        gridContainer.appendChild(square);
    }

}

Squares();

