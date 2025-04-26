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

const squareSize = 100 / size;

for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = squareSize + '%';
    square.style.height = squareSize + '%';
    content.appendChild(square); 

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
    }
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