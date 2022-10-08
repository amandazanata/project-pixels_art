/* Variáveis ----------------------------------------------------------------*/



/* Funções ----------------------------------------------------------------*/
function createTagH1() {
  const getId = document.getElementById('title');
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Paleta de Cores';
  getId.appendChild(h1);
};

function createPixel() {
  const getIdPalette = document.getElementById('color-palette');

  for (let index = 0; index < 4; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.style.width = '50px';
    createDiv.style.height = '50px';
    createDiv.style.border = 'solid 1px black';
    createDiv.classList = 'color';
    createDiv.id = index + 1;
    getIdPalette.appendChild(createDiv);
  }
  return createDiv;
}

/* Chamada das Funções ----------------------------------------------------------------*/
createTagH1();
createPixel();
