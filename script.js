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
    createDiv.classList = 'color';
    createDiv.id = index + 1;
    getIdPalette.appendChild(createDiv);
  }
  return getIdPalette;
}

const selectedClass = () => {
  const getIdColor = document.getElementById('1');
  getIdColor.classList.toggle = 'selected';
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

function createBoard() {
  for (let index = 0; index < 5; index += 1) {
    for (let index2 = 0; index2 < 1; index2 += 1) {
      const createPixels = document.createElement('div');
      createPixels.style.width = '40px';
      createPixels.style.height = '40px';
      createPixels.classList.add('pixel');
      createPixels.style.backgroundColor = 'white';
      createPixels.style.border = '1px solid black';
/*       createPixels.style.marginLeft = '540px';
      createPixels.style.marginRight = '540px'; */
      getIdPixBoard.appendChild(createPixels);
    }
  }
  return getIdPixBoard;
}

/* function sizeCorrect () {
  if (getIdPixBoard === 5) {
   }
  console.log(null);
} */

/* Botões  ----------------------------------------------------------------*/
const getBtnColors = document.getElementById('button-random-color');
getBtnColors.innerHTML = 'Cores aleatórias';
getBtnColors.addEventListener('click', pixelate);

/* Chamada das Funções ----------------------------------------------------------------*/
createTagH1();
createPixel();
selectedClass;
firstColorPalette();
colorRandom();
pixelate();
createBoard();

// exemplos de javascript
//
// template literals: coloca a variável dentro das chaves >> `rgb(${liz}, ${manu}, ${pedro})`;
//
