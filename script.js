const content = document.querySelector('.content');
const slider = document.querySelector('.slider');

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

    }
}

slider.addEventListener('input', function() {
    const size = slider.value;
    createGrid(size);
});

createGrid(slider.value);