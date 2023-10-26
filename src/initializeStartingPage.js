function initializeStartingPage() {
  const mainContent = document.getElementById('main_content');

  const userName = document.createElement('div');
  userName.classList.add('user_name');
  mainContent.appendChild(userName);

  const form = document.createElement('form');
  form.action = '';
  userName.appendChild(form);

  const label = document.createElement('label');
  label.setAttribute('for', 'nameBox');
  label.textContent = 'Enter Fleet Name:';
  form.appendChild(label);

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('maxlength', '20');
  input.setAttribute('minlength', '1');
  input.setAttribute('id', 'nameBox');
  form.appendChild(input);

  const boardPaneWrapper = document.createElement('div');
  boardPaneWrapper.classList.add('board-pane-wrapper');
  mainContent.appendChild(boardPaneWrapper);

  const boardButtons = document.createElement('div');
  boardButtons.classList.add('board-buttons');
  boardPaneWrapper.appendChild(boardButtons);

  const restartButton = document.createElement('div');
  restartButton.classList.add('button');
  restartButton.setAttribute('title', 'clears the board');
  restartButton.setAttribute('id', 'restartBtn');
  boardButtons.appendChild(restartButton);

  const restartSvg = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  restartSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  restartSvg.setAttribute('height', '50');
  restartSvg.setAttribute('viewBox', '0 -960 960 960');
  restartSvg.setAttribute('width', '50');
  restartSvg.setAttribute('fill', 'white');

  const restartPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  restartPath.setAttribute(
    'd',
    'M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z'
  );
  restartSvg.appendChild(restartPath);

  restartButton.appendChild(restartSvg);

  const randomizeButton = document.createElement('div');
  randomizeButton.classList.add('button');
  randomizeButton.setAttribute(
    'title',
    'randomly generates placement of the ships'
  );
  randomizeButton.setAttribute('id', 'randomizeBtn');
  boardButtons.appendChild(randomizeButton);

  const randomizeSvg = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  randomizeSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  randomizeSvg.setAttribute('height', '50');
  randomizeSvg.setAttribute('viewBox', '0 -960 960 960');
  randomizeSvg.setAttribute('width', '50');
  randomizeSvg.setAttribute('fill', 'white');

  const randomizePath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  randomizePath.setAttribute(
    'd',
    'M300-240q25 0 42.5-17.5T360-300q0-25-17.5-42.5T300-360q-25 0-42.5 17.5T240-300q0 25 17.5 42.5T300-240Zm0-360q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm180 180q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm180 180q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm0-360q25 0 42.5-17.5T720-660q0-25-17.5-42.5T660-720q-25 0-42.5 17.5T600-660q0 25 17.5 42.5T660-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z'
  );
  randomizeSvg.appendChild(randomizePath);

  randomizeButton.appendChild(randomizeSvg);

  const directionButton = document.createElement('div');
  directionButton.classList.add('button');
  directionButton.setAttribute('title', 'changes the direction of the ships');
  directionButton.setAttribute('id', 'directionBtn');
  boardButtons.appendChild(directionButton);

  const directionSvg = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  directionSvg.setAttribute('width', '50px');
  directionSvg.setAttribute('height', '50px');
  directionSvg.setAttribute('viewBox', '0 0 24 24');
  directionSvg.setAttribute('fill', 'none');
  directionSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  const directionPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  directionPath.setAttribute(
    'd',
    'M12 12H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM16 8L9.5 9.5L8 16L14.5 14.5L16 8Z'
  );
  directionPath.setAttribute('stroke', 'white');
  directionPath.setAttribute('stroke-width', '2');
  directionPath.setAttribute('stroke-linecap', 'round');
  directionPath.setAttribute('stroke-linejoin', 'round');

  directionSvg.appendChild(directionPath);
  directionButton.appendChild(directionSvg);

  // Create the board grid
  const boardGrid = document.createElement('div');
  boardGrid.classList.add('board_grid');
  boardGrid.setAttribute('id', 'board_grid');
  boardPaneWrapper.appendChild(boardGrid);

  // Create the 'start game' button
  const startGameButton = document.createElement('div');
  startGameButton.classList.add('start-game', 'button');
  startGameButton.textContent = 'S\nT\nA\nR\nT';
  boardPaneWrapper.appendChild(startGameButton);
}

export { initializeStartingPage };
