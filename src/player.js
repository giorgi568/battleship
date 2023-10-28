import { Gameboard } from './gameboard';

class Player {
  constructor(name) {
    this.name = name;
    this.board = new Gameboard();
    this.gb = [
      [1, 10],
      [2, 10],
      [3, 10],
      [4, 10],
      [5, 10],
      [6, 10],
      [7, 10],
      [8, 10],
      [9, 10],
      [10, 10],

      [1, 9],
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
      [6, 9],
      [7, 9],
      [8, 9],
      [9, 9],
      [10, 9],

      [1, 8],
      [2, 8],
      [3, 8],
      [4, 8],
      [5, 8],
      [6, 8],
      [7, 8],
      [8, 8],
      [9, 8],
      [10, 8],

      [1, 7],
      [2, 7],
      [3, 7],
      [4, 7],
      [5, 7],
      [6, 7],
      [7, 7],
      [8, 7],
      [9, 7],
      [10, 7],

      [1, 6],
      [2, 6],
      [3, 6],
      [4, 6],
      [5, 6],
      [6, 6],
      [7, 6],
      [8, 6],
      [9, 6],
      [10, 6],

      [1, 5],
      [2, 5],
      [3, 5],
      [4, 5],
      [5, 5],
      [6, 5],
      [7, 5],
      [8, 5],
      [9, 5],
      [10, 5],

      [1, 4],
      [2, 4],
      [3, 4],
      [4, 4],
      [5, 4],
      [6, 4],
      [7, 4],
      [8, 4],
      [9, 4],
      [10, 4],

      [1, 3],
      [2, 3],
      [3, 3],
      [4, 3],
      [5, 3],
      [6, 3],
      [7, 3],
      [8, 3],
      [9, 3],
      [10, 3],

      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 2],
      [7, 2],
      [8, 2],
      [9, 2],
      [10, 2],

      [1, 1],
      [2, 1],
      [3, 1],
      [4, 1],
      [5, 1],
      [6, 1],
      [7, 1],
      [8, 1],
      [9, 1],
      [10, 1],
    ];
  }

  sameArray(arr1, arr2) {
    //returns true if arrays are same
    if (arr1[0] === arr2[0] && arr1[1] === arr2[1]) {
      return true;
    } else {
      return false;
    }
  }
  compareFn(cords, misses) {
    let result = 0;
    misses.forEach((miss) => {
      if (this.sameArray(cords, miss)) {
        result = 1;
      }
    });
    return result;
  }
  availableMoves() {
    return this.gb.filter(
      (cords) => this.compareFn(cords, this.board.misses) === 0
    );
  }
  randomMove() {
    let availableMoves = this.availableMoves();
    let randomIndex = Math.floor(Math.random() * availableMoves.length);
    // return availableMoves;
    return availableMoves[randomIndex];
  }

  randomDirection() {
    if (Math.random() > 0.5) {
      return 'horizontal';
    } else {
      return 'vertical';
    }
  }
  randomBoat(len) {
    let randomSpot = this.randomMove();
    let randomDirection = this.randomDirection();

    if (
      this.board.placeShip(randomDirection, len, randomSpot[0], randomSpot[1])
    ) {
      return true;
    } else {
      // return false;
      this.randomBoat(len);
    }
  }

  randomBoard() {
    this.randomBoat(5);
    this.randomBoat(3);
    this.randomBoat(3);
    this.randomBoat(2);
  }

  getAdjacentAvailableCells(x, y) {
    let adjacentCells = [];
    if (
      this.compareFn([x + 1, y], this.board.misses) === 0 &&
      this.isWithinBounds(x + 1, y)
    ) {
      adjacentCells.push([x + 1, y]);
    }
    if (
      this.compareFn([x - 1, y], this.board.misses) === 0 &&
      this.isWithinBounds(x - 1, y)
    ) {
      adjacentCells.push([x - 1, y]);
    }
    if (
      this.compareFn([x, y + 1], this.board.misses) === 0 &&
      this.isWithinBounds(x, y + 1)
    ) {
      adjacentCells.push([x, y + 1]);
    }
    if (
      this.compareFn([x, y - 1], this.board.misses) === 0 &&
      this.isWithinBounds(x, y - 1)
    ) {
      adjacentCells.push([x, y - 1]);
    }
    return adjacentCells;
  }

  isWithinBounds(x, y) {
    if (x <= 0 || x > 10) {
      return false;
    }
    if (y <= 0 || y > 10) {
      return false;
    }
    return true;
  }
}

export { Player };
