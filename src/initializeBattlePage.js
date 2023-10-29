import { drawBoard } from './boardUI';

function initializeBattlePage() {
  const mainContent = document.getElementById('main_content');
  mainContent.textContent = '';

  const battlePane = document.createElement('div');
  battlePane.classList.add('battle-pane');
  battlePane.setAttribute('id', 'battle-pane');
  mainContent.append(battlePane);

  // Create the player board
  const playerBoard = document.createElement('div');
  playerBoard.classList.add('player', 'board', 'board_grid');
  playerBoard.setAttribute('id', 'player');
  battlePane.append(playerBoard);

  // Create the score container
  const scoreContainer = document.createElement('div');
  scoreContainer.classList.add('score', 'board');
  scoreContainer.setAttribute('id', 'score');
  battlePane.append(scoreContainer);

  // Create the score message
  const scoreMessage = document.createElement('div');
  scoreMessage.classList.add('score-message');
  scoreMessage.setAttribute('id', 'score-message');
  scoreContainer.append(scoreMessage);

  const messageText = document.createTextNode(
    'Start The Game By Clicking On The Oponents Board On The Right. You Both have 3 Ships Total, First Player To Destroy All The Opponents Ships Wins.'
  );
  scoreMessage.append(messageText);

  // Create the players' and computers' scores
  const playersScore = document.createElement('div');
  playersScore.classList.add('players-score');
  playersScore.setAttribute('id', 'players-score');
  scoreContainer.append(playersScore);

  const playerShips = document.createElement('p');
  playerShips.setAttribute('id', 'player-ships');
  playersScore.append(playerShips);

  const computersScore = document.createElement('div');
  computersScore.classList.add('computers-score');
  computersScore.setAttribute('id', 'computers-score');
  scoreContainer.append(computersScore);

  const computerShips = document.createElement('p');
  computerShips.setAttribute('id', 'computer-ships');
  computersScore.append(computerShips);

  // Create the menu button
  const menuButton = document.createElement('div');
  menuButton.classList.add('menuBtn', 'button');
  menuButton.setAttribute('id', 'menuBtn');
  menuButton.textContent = 'Menu';
  scoreContainer.append(menuButton);

  const computerBoard = document.createElement('div');
  computerBoard.classList.add('computer', 'board', 'board_grid');
  computerBoard.setAttribute('id', 'computers-score');
  battlePane.append(computerBoard);

  // const playerBoardCells = document.getElementById('player');
  drawBoard(playerBoard, 'playerCell');

  // const computerBoardCells = document.getElementById('computer');
  drawBoard(computerBoard, 'computerCell');
}

function updateScore(computer, player) {
  let playerScore = document.getElementById('players-score');
  let computerScore = document.getElementById('computers-score');

  playerScore.textContent = `${player.name} - ${player.board.shipsLeft()} ships`
  computerScore.textContent = `${computer.name} - ${computer.board.shipsLeft()} ships`
}

export { initializeBattlePage, updateScore };
