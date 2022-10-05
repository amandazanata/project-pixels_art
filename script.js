let palletteColor = document.getElementById('.color-palette');

function fazTabela() {
  const table = document.createElement('table');
  const tablebd = document.createElement('tbody');

  for (let index = 0; index < 4; index += 1) {
    const row = document.createElement('tr');
    for (let index2 = 0; index2 < 1; index2 += 1) {
      const line = document.createElement('td');
      const lineText = document.createTextNode(`line in row ${index}, column ${index2}`);
      line.appendChild(lineText);
      row.appendChild(line);
    }
    tablebd.appendChild(row);
  }
  table.appendChild(tablebd);
  document.body.appendChild(table);
  table.setAttribute('border', '4');
}
