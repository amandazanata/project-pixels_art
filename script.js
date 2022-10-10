window.onload = function open() {
  function createTagH1() {
    const getHeader = document.querySelector('header');
    const h1 = document.createElement('h1');
    h1.id = 'title';
    h1.innerHTML = 'Paleta de Cores';
    getHeader.appendChild(h1);
  }
  createTagH1();
}

// Gerador de cores aleatórias

function colorRandom() {
  const liz = Math.floor(Math.random() * 256);
  const manu = Math.floor(Math.random() * 256);
  const pedro = Math.floor(Math.random() * 256);
  return `rgb(${liz}, ${manu}, ${pedro})`;
}

const pixelate = () => {
  const paint = document.getElementsByClassName('color');
  for (let index = 1; index < paint.length; index += 1) {
    paint[index].style.backgroundColor = colorRandom();
  }
  if (colorRandom <= 255 && colorRandom === 0) {
    return pixelate * (256 / colorRandom) % 256;
  }
}

// Cria paleta de cores com 4 pixels

const getIdPalette = document.getElementById('color-palette');

function createPalette() {

  for (let index = 0; index < 4; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.style.width = '50px';
    createDiv.style.height = '50px';
    createDiv.style.border = 'solid 1px black';
    createDiv.style.marginLeft = '5px';
    createDiv.style.display = 'inline-block';
    createDiv.className = 'color';
    createDiv.style.backgroundColor = pixelate();
    createDiv.id = [index];
    getIdPalette.appendChild(createDiv);

    document.getElementsByClassName('color')[0].classList.add('selected');
    document.getElementById('0').style.backgroundColor = 'black';
  }
}
createPalette();
colorRandom();
pixelate();

// Botão de cores aleatórias

const getBtnColors = document.getElementById('button-random-color');
getBtnColors.innerHTML = 'Cores aleatórias';
getBtnColors.addEventListener('click', pixelate);

/* const blackBoard = () => {
  const firstColor = 'black';
  for (let index = 0; index < firstColor.length; index += 1) {
    firstColor.push(getIdPalette.childNodes[index].style.backgroundColor);
  }
} */

// Cria quadro de pixels 5x5

const getIdPixBoard = document.getElementById('pixel-board');

function createBoard(number) {
  for (let index = 0; index < number; index += 1) {
    const inPixels = document.createElement('div');
    for (let index2 = 0; index2 < number; index2 += 1) {
      const clPixels = document.createElement('div');
      inPixels.appendChild(clPixels);
      clPixels.className = ('pixel');
      clPixels.style.border = '1px solid black';
      clPixels.style.width = '40px';
      clPixels.style.height = '40px';
      clPixels.style.display = 'inline-block';
      clPixels.style.marginLeft = '5px';
    }
    getIdPixBoard.appendChild(inPixels);
  }
}
createBoard(5);

// Função limpa quadro de pixels

const clearBoard = () => {
  const turnWhite = document.getElementsByClassName('pixel');
  for (let index = 0; index < turnWhite.length; index += 1) {
    turnWhite[index].style.backgroundColor = 'white';
  }
}
clearBoard();

// Botão limpa quadro de pixels

const getBtnClear = document.getElementById('clear-board');
getBtnClear.addEventListener('click', clearBoard);
console.log(getBtnClear);

/* const getColorClass = document.getElementsByClassName('color');
const colorBoard = [];

function colorify() {
  for (let index = 0; index < 4; index += 1) {
    colorBoard[index] = getColorClass[index].style.backgroundColor;
  }
  localStorage.setItem('colorPalette', JSON.stringify(colorBoard));
}
colorify();

function recolorify() {
  const colored = JSON.parse(localStorage.getItem('colorPalette'));
  for (let index = 0; index < 4; index += 1); {
  getColorClass[index].style.backgroundColor = colored[index];
  }
}
recolorify();

if (localStorage.getItem('colorPalette') === null) {
  pixelate();
} else {
  recolorify();
} */

// Chama função


// exemplos de javascript

/* template literals: coloca a variável dentro das chaves >> `rgb(${liz}, ${manu}, ${pedro})`; */
