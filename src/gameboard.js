import { Ship } from './ship';

class Gameboard {
  constructor() {
    this.ships = [];
    this.misses = [];
    this.allShipCords = [];
    //misses array also consists of hits
  }

  placeShip(direction, length, x_cor, y_cor) {
    let ship = new Ship(length);

    let shipObj = {};
    shipObj.obj = ship;
    if (direction === 'vertical') {
      if (y_cor + ship.length <= 11) {
        shipObj.x_cords = [x_cor, x_cor];
        shipObj.y_cords = [y_cor, y_cor + (ship.length - 1)];
      } else {
        console.log('11111');
        return false;
      }
    } else if (direction === 'horizontal') {
      if (x_cor + ship.length <= 11) {
        shipObj.y_cords = [y_cor, y_cor];
        shipObj.x_cords = [x_cor, x_cor + (ship.length - 1)];
      } else {
        console.log('11111');
        return false;
      }
    }

    let allcords = this.getShipCords(direction, length, x_cor, y_cor);
    // this.allShipCords.push(allcords);
    // console.log(allcords, this.allShipCords);
    // console.log(this.checkForPlace(allcords, this.allShipCords));
    if (!this.checkForPlace(allcords, this.allShipCords)) {
      // console.log('buggggg');
      return false;
    } else {
      // this.allShipCords.push(allcords);
      allcords.forEach((arr) => this.allShipCords.push(arr));
    }

    // if (
    //   !this.checkForPlacX(shipObj.x_cords[0], shipObj.x_cords[1]) ||
    //   !this.checkForPlacY(shipObj.y_cords[0], shipObj.y_cords[1])
    // ) {
    //   console.log('buggggg');
    //   return false;
    // }

    this.ships.push(shipObj);

    return this.ships;
  }

  getShipCords(direction, length, x_cor, y_cor) {
    let allCords = [];
    if (direction === 'horizontal') {
      for (let i = x_cor; i < x_cor + length; i++) {
        allCords.push([i, y_cor]);
      }
    } else if (direction === 'vertical') {
      for (let i = y_cor; i < y_cor + length; i++) {
        allCords.push([x_cor, i]);
      }
    }
    // console.log('heres cords - ' + allCords);
    return allCords;
  }

  sameArray(arr1, arr2) {
    //returns true if arrays are same
    if (arr1[0] === arr2[0] && arr1[1] === arr2[1]) {
      return true;
    } else {
      return false;
    }
  }

  checkForPlace(allcords, allShipCords) {
    for (const arr1 of allcords) {
      for (const arr2 of allShipCords) {
        if (this.sameArray(arr1, arr2)) {
          return false;
        }
      }
    }
    return true;
  }

  checkForPlacX(x, y) {
    let thereIsPlace = true;
    this.ships.forEach((ship) => {
      if (
        x >= ship.x_cords[0] &&
        x <= ship.x_cords[1] &&
        y >= ship.x_cords[0] &&
        y <= ship.x_cords[1]
      ) {
        return (thereIsPlace = false);
      }
    });

    return thereIsPlace;
  }

  checkForPlacY(x, y) {
    let thereIsPlace = true;
    this.ships.forEach((ship) => {
      if (
        y >= ship.y_cords[0] &&
        y <= ship.y_cords[1] &&
        x >= ship.y_cords[0] &&
        x <= ship.y_cords[1]
      ) {
        return (thereIsPlace = false);
      }
    });

    return thereIsPlace;
  }

  checkMissesArray(x, y) {
    let alreadyShot = false;
    this.misses.forEach((arr) => {
      if (JSON.stringify(arr) === JSON.stringify([x, y])) {
        return (alreadyShot = true);
      }
    });
    return alreadyShot;
  }

  hitShip(x, y) {
    this.ships.forEach((ship) => {
      if (
        x >= ship.x_cords[0] &&
        x <= ship.x_cords[1] &&
        y >= ship.y_cords[0] &&
        y <= ship.y_cords[1]
      ) {
        ship.obj.hit();
        this.misses.push([x, y]);
      }
    });
  }

  receiveAttack(x, y) {
    if (this.checkMissesArray(x, y)) {
      return 'place had already hit';
    }

    if (this.checkForPlacX(x, y) && this.checkForPlacY(x, y)) {
      this.misses.push([x, y]);
    } else {
      this.hitShip(x, y);
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => {
      return ship.obj.isSunk() === true;
    });
  }
}

export { Gameboard };
