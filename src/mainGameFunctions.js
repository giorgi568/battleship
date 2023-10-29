import { updateScore } from './initializeBattlePage';

// const score = document.getElementById('score');

const playerBoard = document.getElementsByClassName('playerCell');
const computerBoard = document.getElementsByClassName('computerCell');

let adjacentCells = [];

function playerMove(computer, player) {
  const score = document.getElementById('score');

  updateScore(computer, player);

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
              computerMove(adjacentCell[0], adjacentCell[1], computer, player);
            }, 500);
          } else {
            console.log(222, adjacentCells);
            let randomMove = player.randomMove();
            setTimeout(() => {
              computerMove(randomMove[0], randomMove[1], computer, player);
            }, 500);
          }
        }

        updateScore(computer, player);
      },
      { once: true }
    );
  }
}

function computerMove(x, y, computer, player) {
  const score = document.getElementById('score');

  updateScore(computer, player);

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
        computerMove(adjacentCell[0], adjacentCell[1], computer, player);
      }, 500);
    } else {
      adjacentCells = player.getAdjacentAvailableCells(x, y);
      let adjacentCell = adjacentCells.shift();
      setTimeout(() => {
        computerMove(adjacentCell[0], adjacentCell[1], computer, player);
      }, 500);
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
