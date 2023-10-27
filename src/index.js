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

for (let i = 0; i < computerBoard.length; i++) {
  let cell = computerBoard[i].dataset.cords.split(',');
  cell = cell.map((str) => {
    return parseInt(str, 10);
  });

  computerBoard[i].addEventListener(
    'click',
    () => {
      console.log(computer);
      if (computer.board.receiveAttack(cell[0], cell[1])) {
        computerBoard[i].classList.add('ship');
        if (computer.board.allShipsSunk()) {
          score.textContent = 'congrats, you have won';
        }
      } else {
        computerBoard[i].classList.add('water');

        let randomMove = computer.randomMove();
        console.log(6666666666666, randomMove)
        if (player.board.receiveAttack(randomMove[0], randomMove[1])) {
          for (let i = 0; i < playerBoard.length; i++) {
            let cords = playerBoard[i].dataset.cords;
            if (cords[0] === randomMove[0] && cords[1] === randomMove[1]) {
              playerBoard[i].classList.add('ship');
            }
          }
        } else {
          playerBoard[i].classList.add('water');
        }

        if(player.board.allShipsSunk()) {
          score.textContent = 'sorry, you have lost, computer won'
        }
      }
    },
    { once: true }
  );
}
