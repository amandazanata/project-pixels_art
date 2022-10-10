window.onload = () => {
  // Guarda paleta de cores gerada, após recarregar página
  const getColorClass = document.getElementsByClassName('color');
  const colorBoard = [];

  function colorify() {
    for (let index = 0; index < 4; index += 1) {
      colorBoard[index] = getColorClass[index].style.backgroundColor;
    }
    localStorage.setItem('colorPalette', JSON.stringify(colorBoard));
  }
  colorify();

  if (localStorage.getItem('colorPalette') === null) {
    pixelate();
  }
}
// Fim window.onload

function createTagH1() {
  const getHeader = document.querySelector('header');
  const h1 = document.createElement('h1');
  h1.id = 'title';
  h1.innerHTML = 'Paleta de Cores';
  getHeader.appendChild(h1);
}
createTagH1();

// Gerador de cores aleatórias

function colorRandom() {
  const liz = Math.floor(Math.random() * 256);
  const manu = Math.floor(Math.random() * 256);
  const pedro = Math.floor(Math.random() * 256);
  return `rgb(${liz}, ${manu}, ${pedro})`;
}

let paint = document.getElementsByClassName('color');

const pixelate = () => {
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
    createDiv.id = [index];
    getIdPalette.appendChild(createDiv);

    document.getElementById('0').style.backgroundColor = 'black';
  }
}

// Cria quadro de pixels 5x5

const getIdPixBoard = document.getElementById('pixel-board');
getIdPixBoard.style.marginTop = '5px';

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
      clPixels.style.backgroundColor = 'white';
    }
    getIdPixBoard.appendChild(inPixels);
  }
}

// Funções event bubbling

function startBlack() {
  const blackBoard = document.getElementsByClassName('color')[0];
  blackBoard.classList.add('selected');
}

function selectColor() {
  const selectPalette = document.getElementById('color-palette');
  selectPalette.addEventListener('click', (pick) => {
    const getSelected = document.getElementsByClassName('selected')[0];
    getSelected.classList.remove('selected');
    pick.target.classList.add('selected');
  });
}

/* function pickPixelColor(event) {
  const pixelColor = document.getElementsByClassName('color');
  pixelColor.target.backgroundColor('paint[index]');
} */

function pixelateBoard() {
  const getPixelate = document.getElementById('pixel-board');
  getPixelate.addEventListener('click', (pbo) => {
    pbo.target.style.backgroundColor = document.getElementsByClassName('selected');
  });
}

function recolorify() {
  let getColorClass = document.getElementsByClassName('color');
  const colored = JSON.parse(localStorage.getItem('colorPalette'));
  for (let index = 0; index < 4; index += 1) {
    getColorClass += colored[index];
  }
}

const getBtnColors = document.getElementById('button-random-color');
getBtnColors.innerHTML = 'Cores aleatórias';
getBtnColors.addEventListener('click', pixelate);
getBtnColors.style.zIndex = 1;

window.addEventListener('click', startBlack, true);
window.addEventListener('click', selectColor, true);
window.addEventListener('click', createBoard, true);
window.addEventListener('click', pixelateBoard, true);

// Função e botão limpa quadro de pixels

const clearBoard = () => {
  const turnWhite = document.getElementsByClassName('pixel');
  for (let index = 0; index < turnWhite.length; index += 1) {
    turnWhite[index].addEventListener('click', true).style.backgroundColor = 'white';
  }
}

const getBtnClear = document.getElementById('clear-board');
getBtnClear.addEventListener('click', clearBoard);
getBtnClear.innerHTML = 'Limpar';
getBtnClear.style.marginLeft = '150px';
getBtnClear.style.zIndex = 2;
getBtnClear.style.marginBottom = '10px';

createPalette();
colorRandom();
pixelate();
createBoard(5);
startBlack();
selectColor();
pixelateBoard();
recolorify();
clearBoard();
