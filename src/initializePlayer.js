import { drawBoard, drawShipPlacement, drawShips, clearBoard } from './boardUI';
import { Player } from './player';

let player = new Player();
let board = player.board;
let fleet = [5, 3, 3, 2];
let direction = 'horizontal';

function initializePlayer() {
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
      }else{
        allCells[i].classList.add('red-shadow');
        setTimeout(()=> {
          allCells[i].classList.remove('red-shadow');
        }, 1000)
      }
      console.log(board);
    });
  }

  const restartBtn = document.getElementById('restartBtn');
  restartBtn.addEventListener('click', () => {
    clearBoard(board);
    player = new Player();
    board = player.board;
    fleet = [5, 3, 3, 2];
  });

  const randomizeBtn = document.getElementById('randomizeBtn');
  randomizeBtn.addEventListener('click', () => {
    // console.log(board);
    clearBoard(board);
    player = new Player();
    board = player.board;
    fleet = [5, 3, 3, 2];

    player.randomBoard();
    drawShips(board);
    fleet = [];
  });

  const directionBtn = document.getElementById('directionBtn');
  directionBtn.addEventListener('click', () => {
    if (direction === 'horizontal') {
      direction = 'vertical';
    } else {
      direction = 'horizontal';
    }
  });

  let nameBox = document.getElementById('nameBox');
  nameBox.addEventListener('input', () => {
    player.name = nameBox.value;
  });

  return player
}

export { initializePlayer, player };
