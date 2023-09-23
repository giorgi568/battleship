class Ship {
  constructor(length) {
    this.length = length;
    this.hitNum = 0;
    this.sunk = false;
  }

  hit() {
    this.hitNum++;
  }
  isSunk() {
    if (this.hitNum >= this.length) {
      this.sunk = true;
      return true;
    } else {
      return false;
    }
  }
}

export { Ship };
