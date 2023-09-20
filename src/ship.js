class Ship {
  constructor(lenght) {
    this.lenght = lenght;
    this.hitNum = 0;
    this.sunk = false;
  }

  hit() {
    this.hitNum++;
  }
  isSunk() {
    if (this.hitNum >= this.lenght) {
      this.sunk = true;
      return true;
    } else {
      return false;
    }
  }
}

export { Ship };
