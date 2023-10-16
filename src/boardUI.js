import { Player } from './player';

export default function drawBoard() {
  let boardGrid = document.getElementById('board_grid');
  for (let i = 1; i <= 100; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    if (i === 100) {
      gridItem.dataset.x = 10;
      gridItem.dataset.y = 10;
    } else {
      gridItem.dataset.x = Math.floor((i / 10 - Math.floor(i / 10)) * 10);
      gridItem.dataset.y = Math.floor(i / 10) + 1;
    }
    boardGrid.append(gridItem);
  }
}

