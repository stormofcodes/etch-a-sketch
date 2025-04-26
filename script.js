const content = document.querySelector('.content');
const slider = document.querySelector('.slider');

let isFilling = false;

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
            this.classList.add('filled');
        }
    });
    square.addEventListener('mousedown', function() {
        isFilling = !isFilling;
        if (isFilling) {
            this.classList.add('filled');
        }
    });
    }
}

slider.addEventListener('input', function() {
    const size = slider.value;
    createGrid(size);
});

createGrid(slider.value);