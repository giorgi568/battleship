
function drawBoard(boardPanel, secondClass) {
  let boardGrid;
  
  if(boardPanel) {
    boardGrid = boardPanel;
  }else{
    boardGrid = document.getElementById('board_grid');
  }

  for (let i = 1; i <= 100; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    if(secondClass){
      gridItem.classList.add(secondClass);
    }
    if (i === 100) {
      gridItem.dataset.cords = [10, 10];
      // gridItem.dataset.y = 10;
    } else if (i % 10 === 0) {
      gridItem.dataset.cords = [10, Math.floor(i / 10)];
    } else {
      gridItem.dataset.cords = [
        Math.round((i / 10 - Math.floor(i / 10)) * 10),
        Math.floor(i / 10) + 1,
      ];
    }
    gridItem.setAttribute('id', gridItem.dataset.cords);
    boardGrid.append(gridItem);
  }
  return boardGrid;
}

function drawShipPlacement(cell, length, direction) {
  let allCells = document.getElementsByClassName('grid-item');
  for (let i = 0; i < allCells.length; i++) {
    allCells[i].classList.remove('green-shadow');
  }

  if (direction === 'horizontal') {
    if (cell[0] + length <= 11) {
      for (let i = cell[0]; i < cell[0] + length; i++) {
        let greenCell = document.getElementById(`${i},${cell[1]}`);
        greenCell.classList.add('green-shadow');
      }
    }
  }

  if (direction === 'vertical') {
    if (cell[1] + length <= 11) {
      for (let i = cell[1]; i < cell[1] + length; i++) {
        let greenCell = document.getElementById(`${cell[0]},${i}`);
        greenCell.classList.add('green-shadow');
      }
    }
  }
}

function drawShips(board) {
  let ships = board.allShipCords

  for(const ship of ships){
    let shipCell = document.getElementById(`${ship[0]},${ship[1]}`);
    shipCell.classList.add('ship');
  }
}

function clearBoard(board) {
  let ships = board.allShipCords

  for(const ship of ships){
    let shipCell = document.getElementById(`${ship[0]},${ship[1]}`);
    shipCell.classList.remove('ship');
  } 
}

export { drawBoard, drawShipPlacement, drawShips, clearBoard };
