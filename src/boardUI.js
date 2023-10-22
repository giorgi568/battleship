import { Player } from './player';

function drawBoard() {
  let boardGrid = document.getElementById('board_grid');
  for (let i = 1; i <= 100; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    if (i === 100) {
      gridItem.dataset.cords = [10, 10];
      // gridItem.dataset.y = 10;
    } else if (i % 10 === 0) {
      gridItem.dataset.cords = [10, Math.floor(i / 10)];
      // gridItem.dataset.y = Math.floor(i / 10);
    } else {
      gridItem.dataset.cords = [
        Math.round((i / 10 - Math.floor(i / 10)) * 10),
        Math.floor(i / 10) + 1,
      ];
      // gridItem.dataset.y = Math.floor(i / 10) + 1;
    }
    gridItem.setAttribute('id', gridItem.dataset.cords);
    boardGrid.append(gridItem);
  }
}

function drawShipPlacement(cell, length, direction) {
  cell = cell.split(',');
  cell = cell.map((str) => {
    return parseInt(str, 10);
  });
  console.log(cell);

  let allCells = document.getElementsByClassName('grid-item');
  for (let i = 0; i < allCells.length; i++) {
    allCells[i].classList.remove('green-shadow');
  }

  if (direction === 'horizontal') {
    console.log(cell[0] + length);
    if (cell[0] + length <= 10) {
      for (let i = cell[0]; i <= cell[0] + length; i++) {
        let greenCell = document.getElementById(`${i},${cell[1]}`);
        greenCell.classList.add('green-shadow');
        // conosle.log(greenCell);
      }
    }
  }

  if (direction === 'vertical') {
    if (cell[1] + length <= 10) {
      for (let i = cell[1]; i <= cell[1] + length; i++) {
        let greenCell = document.getElementById(`${cell[0]},${i}`);
        greenCell.classList.add('green-shadow');
      }
    }
  }
}

export { drawBoard, drawShipPlacement };
