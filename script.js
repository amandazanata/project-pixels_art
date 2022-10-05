function generatePalette() {
  const colorPalette = document.querySelector('#color-palette');

  for (let index = 0; index < 4; index += 1) {
    const divColors = document.createElement('div');
    divColors.classList.add('color');
    divColors.setAttribute('class', 'color' + index);

    colorPalette.appendChild(divColors);
  }
}
generatePalette();
