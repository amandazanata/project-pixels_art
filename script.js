/* Variáveis ----------------------------------------------------------------*/



/* Funções ----------------------------------------------------------------*/
function createTagH1() {
  const getId = document.getElementById('title');
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Paleta de Cores';
  getId.appendChild(h1);
};

function createPixel() {
  const createDiv = document.createElement('div');
  createDiv.style.width = '30px';
  createDiv.style.height = '30px';
  createDiv.style.borderColor = '1px';
  return createDiv;
}

/* Chamada das Funções ----------------------------------------------------------------*/
createTagH1();
console.log(createPixel());
