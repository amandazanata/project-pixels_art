/* Variáveis Globais ----------------------------------------------------------------*/
const getIdPalette = document.getElementById('color-palette');
const getIdPixBoard = document.getElementById('pixel-board');

/* Funções ----------------------------------------------------------------*/
function createTagH1() {
  const getHeader = document.querySelector('header');
  const h1 = document.createElement('h1');
  h1.id = 'title';
  h1.innerHTML = 'Paleta de Cores';
  h1.style.justifyContent = 'center';
  h1.style.display = 'flex';
  getHeader.appendChild(h1);
}

function createPixel() {
  getIdPalette.style.display = 'flex';

  for (let index = 0; index < 4; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.style.width = '50px';
    createDiv.style.height = '50px';
    createDiv.style.border = 'solid 1px black';
    createDiv.style.marginLeft = '5px';
    createDiv.style.display = 'inline-block';
    createDiv.className = 'color';
    createDiv.id = index + 1;
    getIdPalette.appendChild(createDiv);
  }
  return getIdPalette;
}

// classList está sobrescrevendo a classe color e removendo a cor do segundo pixel da paleta
const selectedClass = () => {
  const getIdColor = document.getElementById('1');
  getIdColor.classList = 'selected';
  console.log(getIdColor);
}

const firstColorPalette = () => {
  const firstColor = document.getElementById('1');
  firstColor.style.backgroundColor = ('black');
}

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
colorRandom();
pixelate();

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
      clPixels.style.backgroundColor = 'white';
      clPixels.style.display = 'inline-block';
    }
    getIdPixBoard.appendChild(inPixels);
  }
}

/* const clearPixelate = () => {
  const clearPix = document.getElementsByClassName('color');
  for (let index = 1; index < paint.length; index += 1) {
    paint[index].style.backgroundColor = colorRandom();
  }
  if (colorRandom <= 255 && colorRandom === 0) {
    return pixelate * (256 / colorRandom) % 256;
  }
} */

/* Botões  ----------------------------------------------------------------*/
const getBtnColors = document.getElementById('button-random-color');
getBtnColors.innerHTML = 'Cores aleatórias';
getBtnColors.addEventListener('click', pixelate);

/* const getBtnColors = document.getElementById('clear-board');
getBtnColors.innerHTML = 'Limpar';
getBtnColors.addEventListener('click', -------); */

/* Chamada das Funções ----------------------------------------------------------------*/
createTagH1();
createPixel();
selectedClass();
firstColorPalette();
colorRandom();
pixelate();
createBoard(5);

// exemplos de javascript
//
// template literals: coloca a variável dentro das chaves >> `rgb(${liz}, ${manu}, ${pedro})`;
//
