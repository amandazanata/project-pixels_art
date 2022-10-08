/* Variáveis ----------------------------------------------------------------*/



/* Funções ----------------------------------------------------------------*/
function createTagH1() {
  const getHeader = document.querySelector('header');
  const h1 = document.createElement('h1');
  h1.id = 'title';
  h1.innerHTML = 'Paleta de Cores';
  getHeader.appendChild(h1);
}

function createPixel() {
  const getIdPalette = document.getElementById('color-palette');
  getIdPalette.style.display = 'flex';

  for (let index = 0; index < 4; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.style.width = '50px';
    createDiv.style.height = '50px';
    createDiv.style.border = 'solid 1px black';
    createDiv.style.marginLeft = '5px';
    createDiv.className = 'color';
    createDiv.id = index + 1;
    getIdPalette.appendChild(createDiv);
  }
  return getIdPalette;
}

function colorRandom() {
  const liz = Math.floor(Math.random() * 256);
  const manu = Math.floor(Math.random() * 256);
  const pedro = Math.floor(Math.random() * 256);
  return `rgb(${liz}, ${manu}, ${pedro})`;
}

const pixelate = () => {
  const paint = document.getElementsByClassName('color');
  for (let index = 0; index < paint.length; index += 1) {
    paint[index].style.backgroundColor = colorRandom();
  }
  if (colorRandom <= 255) {
    return pixelate * (256 / colorRandom) % 256;
  }
}

/* Chamada das Funções ----------------------------------------------------------------*/
createTagH1();
createPixel();
colorRandom();
pixelate();

// exemplos de javascript
//
// template literals: coloca a variável dentro das chaves >> `rgb(${liz}, ${manu}, ${pedro})`;
//
