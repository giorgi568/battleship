import './style.css';
import { drawBoard, drawShipPlacement, drawShips } from './boardUI';
import { Gameboard } from './gameboard';
import { Player } from './player';
// console.log('haa');

let player = new Player();
let board = player.board;
let fleet = [5, 3, 3, 2];
let direction = 'horizontal';


drawBoard();
let allCells = document.getElementsByClassName('grid-item');
for (let i = 0; i < allCells.length; i++) {
  let cell = allCells[i].dataset.cords.split(',');
  cell = cell.map((str) => {
    return parseInt(str, 10);
  });

  allCells[i].addEventListener('mouseover', () => {
    return drawShipPlacement(cell, fleet[0], direction);
  });

  allCells[i].addEventListener('click', () => {
    if (board.placeShip(direction, fleet[0], cell[0], cell[1])) {
      drawShips(board);
      fleet.shift();
    }
    console.log(board);
  });
}

// player.placeShip('horizontal', 5, 1, 1)
// player.placeShip('horizontal', 5, 1, 10)
// console.log(player)
