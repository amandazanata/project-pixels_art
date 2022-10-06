/*------------------------Captura Elementos----------------*/
const paletteColors = document.getElementById('color-palette');
let numbers = 0;


/*------------------------Paleta----------------*/
for (let index = 0; index < 4; index += 1) {
  const createDiv = document.createElement('div');
  createDiv.setAttribute('class', 'color');
  createDiv.setAttribute('id', 'color' + index);
  paletteColors.appendChild(createDiv);
}
/*------------------------Quadro de Pixels----------------*/
for (let index = 0; index < numbers; index += 1) {
  numbers += numbers[index];
}
