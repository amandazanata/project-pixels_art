window.onload = function () {
  const capturaElemento = document.getElementById('color-palette');

  for (let index = 0; index < 4; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.innerHTML = index;
    createDiv.setAttribute('class', 'color' + index);

    capturaElemento.appendChild(createDiv);
  }

/* Termina o escopo do window.onload */
}
