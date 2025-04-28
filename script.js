const content = document.querySelector('.content');
const slider = document.querySelector('.slider');
const colorInput = document.querySelector('.colorInput');
const colorIcon = document.querySelector('.colorIcon');
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
        eraseButton.classList.add('erase-active');
            setTimeout(function () {
            eraseButton.classList.remove('erase-active');
            }, 200);
    } else {
        eraseIcon.src = 'img/eraser.svg';
        eraseButton.classList.add('erase-active');
        setTimeout(function () {
            eraseButton.classList.remove('erase-active');
            }, 200);
    }
});

colorInput.addEventListener('click', function () {
    colorIcon.classList.add('color-active');

    setTimeout(function () {
        colorIcon.classList.remove('color-active');
    }, 200);
});

slider.addEventListener('input', function() {
    const size = slider.value;
    createGrid(size);
});

slider.addEventListener('mousedown', function() {
    slider.classList.add('slider-active');
  });
  
  slider.addEventListener('mouseup', function() {
    slider.classList.remove('slider-active');
  });

createGrid(slider.value);