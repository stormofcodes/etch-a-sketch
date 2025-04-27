const content = document.querySelector('.content');
const slider = document.querySelector('.slider');
const colorInput = document.querySelector('.colorInput');
const eraseButton = document.querySelector('.eraseButton');
const eraseIcon = eraseButton.querySelector('.eraseIcon');

let isFilling = true;
let isErasing = false;
let currentColor = colorInput.value;
let isMouseDown = false;

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

        square.addEventListener('mousedown', function() {
            isMouseDown = true;
            if (isFilling) {
                this.style.backgroundColor = currentColor;
            } else if (isErasing) {
                this.style.backgroundColor = '';
            }
        });

        square.addEventListener('mouseup', function() {
            isMouseDown = false;
        });

        square.addEventListener('mousemove', function() {
            if (isMouseDown) {  
                if (isFilling) {
                    this.style.backgroundColor = currentColor;
                } else if (isErasing) {
                    this.style.backgroundColor = '';
                }
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
    isFilling = !isErasing;

    if (isErasing) {
        eraseIcon.src = 'img/pen.svg';
        eraseButton.style.backgroundColor = '';
    } else {
        eraseIcon.src = 'img/eraser.svg';
        eraseButton.style.backgroundColor = '';
    }
});

slider.addEventListener('input', function() {
    const size = slider.value;
    createGrid(size);
});

createGrid(slider.value);