const content = document.querySelector('.content');
const slider = document.querySelector('.slider');
const colorInput = document.querySelector('.colorInput');
const eraseButton = document.querySelector('.eraseButton');

let isFilling = false;
let isErasing = false;
let currentColor = colorInput.value;

colorInput.addEventListener('input', function() {
currentColor = colorInput.value;
});

function createGrid(size) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const totalDivs = size * size;

for (let i = 0; i < totalDivs; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', function () {
        if (isFilling) {
            this.style.backgroundColor = currentColor;
        } else if (isErasing) {
            this.style.backgroundColor = '';
        }
    });
    square.addEventListener('mousedown', function() {
        isFilling = !isFilling;
        if (isFilling) {
            this.style.backgroundColor = currentColor;
        } else if (isErasing) {
            this.style.backgroundColor = '';
        }
    });

    content.appendChild(square);
    }

    const squareSize = content.clientWidth / size;
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
    });

    
}

eraseButton.addEventListener('click', function () {
    isErasing = !isErasing;
    if (isErasing) {
        eraseButton.style.backgroundColor = 'lightgray';
    } else {
        eraseButton.style.backgroundColor = '';
    }
});

slider.addEventListener('input', function() {
    const size = slider.value;
    createGrid(size);
});

createGrid(slider.value);