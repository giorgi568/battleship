import './style.css';
import { drawBoard, drawShipPlacement } from './boardUI';
import { Gameboard } from './gameboard';
// console.log('haa');
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
    if(player.placeShip(direction, fleet[0], cell[0], cell[1])){
      fleet.shift();
    }
    console.log(player)
  });
}
let player = new Gameboard();
let fleet = [5, 3, 3, 2];
let direction = 'horizontal';

// player.placeShip('horizontal', 5, 1, 1)
// player.placeShip('horizontal', 5, 1, 10)
// console.log(player)