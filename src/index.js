import './style.css';
import { initializePlayer, player } from './initializePlayer';
import { initializeStartingPage } from './initializeStartingPage';
import { initializeBattlePage } from './initializeBattlePage';
import { drawBoard } from './boardUI';
import { Player } from './player';
import { playerMove } from './mainGameFunctions';

function startGame() {
  initializeStartingPage();
  initializePlayer();

  const startBtn = document.getElementById('startBtn');
  startBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('nameBox');
    if (
      nameInput.value.length > 1 &&
      nameInput.value.length < 20 &&
      player.board.ships.length === 4
    ) {
      const mainContent = document.getElementById('main_content');
      mainContent.textContent = '';
      console.log(player);

      initializeBattlePage();

      let computer = new Player();
      computer.randomBoard();
      computer.name = 'computer'

      playerMove(computer, player);

      const menuBtn = document.getElementById('menuBtn');
      menuBtn.addEventListener('click', () => {
        location.reload();
      });
    }
  });
}

startGame();
