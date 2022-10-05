const divMaker = document.createElement('div');
divMaker.id = 'color-palette';

function generatePalette() {
  const divPai = document.querySelector('#color-palette');

  for (let index = 0; index < 4; index += 1) {
    const divColors = document.createElement('div');
    divColors.classList.add('color');
    divColors.setAttribute('class', 'color', index);

    divPai.appendChild(divColors);
  }
}
generatePalette();
