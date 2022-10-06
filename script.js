window.onload = function() {

  const capture = document.querySelector('#color-palette');

  for (let index = 0; index < 4; index += 1) {
    const divColors = document.createElement('div');
    let colorPalette = divColors[index];
    listColors.innerHTML = colorPalette;
    divColors.classList.add('color');
    divColors.id = index;
    colorPalette.setAttribute('class', 'color', index);

  colorPalette.appendChild(divColors);
  }

/* Termina o escopo do window.onload */
