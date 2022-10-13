const paint = document.getElementsByClassName('color');
const getIdPalette = document.getElementById('color-palette');
const turnWhite = document.getElementsByClassName('pixel');
const getBtnClear = document.getElementById('clear-board');

// Gerador de cores aleatórias
function colorRandom() {
  const liz = Math.floor(Math.random() * 256);
  const manu = Math.floor(Math.random() * 256);
  const pedro = Math.floor(Math.random() * 256);
  return `rgb(${liz}, ${manu}, ${pedro})`;
}

function pixelate() {
  for (let index = 1; index < paint.length; index += 1) {
    paint[index].style.backgroundColor = colorRandom();
  }
  if (colorRandom <= 255 && colorRandom === 0) {
    return pixelate * (255 / colorRandom) % 255;
  }
  document.getElementById('0').style.backgroundColor = 'black';
}

// Função e botão limpa quadro de pixels
function clearBoard() {
  getBtnClear.addEventListener('click', () => {
    for (let index = 0; index < turnWhite.length; index += 1) {
      turnWhite[index].style.backgroundColor = 'white';
    }
  });
}

// Botões para cores aleatórias e limpar pixel board
const getBtnColors = document.getElementById('button-random-color');
getBtnColors.addEventListener('click', pixelate);

// Cria paleta de cores com 4 pixels
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
  }
}

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
      clPixels.style.backgroundColor = 'white';
    }
    getIdPixBoard.appendChild(inPixels);
  }
}

// Funções para add selected
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

// Função pinta pixel
function pixelateBoard() {
  for (let index = 0; index < turnWhite.length; index += 1) {
    turnWhite[index].addEventListener('click', () => {
      turnWhite[index].style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    });
  }
}

// Chama função
colorRandom();
createPalette();
pixelate();
createBoard(5);
startBlack();
selectColor();
pixelateBoard();
clearBoard();
