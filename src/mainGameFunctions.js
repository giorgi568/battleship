import { updateScore } from './initializeBattlePage';
import soundfile from './audio/explosion.mp3';
import fiasco from './audio/fiasco.mp3';
import success from './audio/success.mp3';

const playerBoard = document.getElementsByClassName('playerCell');
const computerBoard = document.getElementsByClassName('computerCell');

let adjacentCells = [];
let explosionSound = new Audio(soundfile);
let fiascoSound = new Audio(fiasco);
let successSound = new Audio(success);

function playerMove(computer, player) {
  const score = document.getElementById('score-message');

  updateScore(computer, player);

  for (let i = 0; i < computerBoard.length; i++) {
    let cell = computerBoard[i].dataset.cords.split(',');
    cell = cell.map((str) => {
      return parseInt(str, 10);
    });

    computerBoard[i].addEventListener(
      'click',
      () => {
        explosionSound.play();

        if (computer.board.receiveAttack(cell[0], cell[1])) {
          computerBoard[i].classList.add('ship');
          if (computer.board.allShipsSunk()) {
            score.textContent = 'congrats, you have won';
            successSound.play();
          }
        } else {
          computerBoard[i].classList.add('water');

          if (adjacentCells.length > 0) {
            let adjacentCell = adjacentCells.shift();
            setTimeout(() => {
              computerMove(adjacentCell[0], adjacentCell[1], computer, player);
            }, 800);
          } else {
            let randomMove = player.randomMove();
            setTimeout(() => {
              computerMove(randomMove[0], randomMove[1], computer, player);
            }, 800);
          }
        }

        updateScore(computer, player);
      },
      { once: true }
    );
  }
}

function computerMove(x, y, computer, player) {
  const score = document.getElementById('score-message');

  updateScore(computer, player);

  explosionSound.play();

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
      fiascoSound.play();
      return;
    }

    if (adjacentCells.length > 0) {
      adjacentCells = player.getAdjacentAvailableCells(x, y);
      let adjacentCell = adjacentCells.shift();
      setTimeout(() => {
        computerMove(adjacentCell[0], adjacentCell[1], computer, player);
      }, 800);
    } else {
      adjacentCells = player.getAdjacentAvailableCells(x, y);
      let adjacentCell = adjacentCells.shift();
      setTimeout(() => {
        computerMove(adjacentCell[0], adjacentCell[1], computer, player);
      }, 800);
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

export { playerMove };
