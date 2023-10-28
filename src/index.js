import './style.css';
import { initializePlayer } from './initializePlayer';
import { initializeStartingPage } from './initializeStartingPage';
import { drawBoard } from './boardUI';
import { Player } from './player';

// initializeStartingPage();
// initializePlayer();

// const startBtn = document.getElementById('startBtn');
// startBtn.addEventListener('click', () => {
//   const nameInput = document.getElementById('nameBox');
//   if (nameInput.value.length > 1 && nameInput.value.length < 20) {
//     const mainContent = document.getElementById('main_content');
//     mainContent.textContent = '';
//   }
// });
let player = new Player();
player.randomBoard();

let computer = new Player();
computer.randomBoard();

const playerBoardCells = document.getElementById('player');
drawBoard(playerBoardCells, 'playerCell');

const computerBoardCells = document.getElementById('computer');
drawBoard(computerBoardCells, 'computerCell');

const score = document.getElementById('score');

const playerBoard = document.getElementsByClassName('playerCell');
const computerBoard = document.getElementsByClassName('computerCell');

// console.log(22222, computer.board.ships);
// console.log(88888, player.board.ships);
playerMove();

function playerMove() {
  for (let i = 0; i < computerBoard.length; i++) {
    let cell = computerBoard[i].dataset.cords.split(',');
    cell = cell.map((str) => {
      return parseInt(str, 10);
    });
  
    computerBoard[i].addEventListener(
      'click',
      () => {
        if (computer.board.receiveAttack(cell[0], cell[1])) {
          computerBoard[i].classList.add('ship');
          if (computer.board.allShipsSunk()) {
            score.textContent = 'congrats, you have won';
          }
        } else {
          computerBoard[i].classList.add('water');
  
          if (adjacentCells.length > 0) {
            console.log(333, adjacentCells[0]);
            let adjacentCell = adjacentCells.shift();
            setTimeout(() => {
              computerMove(adjacentCell[0], adjacentCell[1]);
            }, 1000);
          }else{
            console.log(222, adjacentCells);
            let randomMove = player.randomMove();
            setTimeout(() => {
              computerMove(randomMove[0], randomMove[1]);
            }, 1000);
          }
        }
      },
      { once: true }
    );
  }
}

let adjacentCells = [];
function computerMove(x, y) {
  // setTimeout is only for UI so it dosnt happen instantly
  if (player.board.receiveAttack(x, y)) {
    for (let i = 0; i < playerBoard.length; i++) {
      let cell = playerBoard[i].dataset.cords.split(',');
      cell = cell.map((str) => {
        return parseInt(str, 10);
      });
      if (cell[0] === x && cell[1] === y) {
        playerBoard[i].classList.add('ship');
      }
    }

    if (player.board.allShipsSunk()) {
      score.textContent = 'sorry, you have lost, computer won';
      return;
    }

    if (adjacentCells.length > 0) {
      adjacentCells = player.getAdjacentAvailableCells(x, y);
      let adjacentCell = adjacentCells.shift();
      setTimeout(() => {
        computerMove(adjacentCell[0], adjacentCell[1]);
      }, 1000);
    } else {
      adjacentCells = player.getAdjacentAvailableCells(x, y);
      let adjacentCell = adjacentCells.shift();
      setTimeout(() => {
        computerMove(adjacentCell[0], adjacentCell[1]);
      }, 1000);
    }

  } else {
    for (let i = 0; i < playerBoard.length; i++) {
      let cell = playerBoard[i].dataset.cords.split(',');
      cell = cell.map((str) => {
        return parseInt(str, 10);
      });
      if (cell[0] === x && cell[1] === y) {
        playerBoard[i].classList.add('water');
      }
    }
  }
}
