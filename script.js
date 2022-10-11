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
};

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

// Botão de cores aleatórias
const getBtnColors = document.getElementById('button-random-color');
getBtnColors.innerHTML = 'Cores aleatórias';
getBtnColors.addEventListener('click', pixelate);

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

// Função cor preta no quadro
function startBlack() {
  const blackBoard = document.getElementsByClassName('color')[0];
  blackBoard.classList.add('selected');
}

// Remove e adiciona o selected
function selectColor() {
  const selectPalette = document.getElementById('color-palette');
  selectPalette.addEventListener('click', (pick) => {
    const getSelected = document.getElementsByClassName('selected')[0];
    getSelected.classList.remove('selected');
    pick.target.classList.add('selected');
  });
}

/* // Pinta o quadro
function pixelateBoard() {
  let pick;
  const pickColor = document.querySelector('.selected').style.backgroundColor;

  pick.target.style.backgroundColor = pickColor;
} */

/* // Guarda paleta de cores gerada após recarregar página
const saveColors = () => {
  const getColorClass = document.getElementsByClassName('color');
  const colorSave = [];
  for (let index = 1; index < 4; index += 1) {
    colorSave.push(getColorClass[index].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(saveColors));
}; */

// Função e botão limpa quadro de pixels
const clearBoard = () => {
  const turnWhite = document.getElementsByClassName('pixel');
  const getBtnClear = document.getElementById('clear-board');
  const whiteClear = 'white';

  getBtnClear.addEventListener('click', (clear) => {
    for (let index = 0; index < turnWhite.length; index += 1) {
      turnWhite[index].style.backgroundColor = 'white';
    }
    clear.target.style.backgroundColor = whiteClear;
  });
};

// Chama função
createPalette();
colorRandom();
pixelate();
createBoard(5);
startBlack();
clearBoard();
selectColor();
saveColors();
