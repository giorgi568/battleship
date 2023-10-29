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
  checkForPlaceXY(x, y) {
    //this is kinda redundant checkforplace could be used
    //for this, but already wrote it so ...
    const arr1 = [x, y];
    for (const arr2 of this.allShipCords) {
      if (this.sameArray(arr1, arr2)) {
        return true;
      }
    }
    return false;
  }

  // checkForPlacX(x, y) {
  //   let thereIsPlace = true;
  //   this.ships.forEach((ship) => {
  //     if (
  //       x >= ship.x_cords[0] &&
  //       x <= ship.x_cords[1] &&
  //       y >= ship.x_cords[0] &&
  //       y <= ship.x_cords[1]
  //     ) {
  //       return (thereIsPlace = false);
  //     }
  //   });

  //   return thereIsPlace;
  // }

  // checkForPlacY(x, y) {
  //   let thereIsPlace = true;
  //   this.ships.forEach((ship) => {
  //     if (
  //       y >= ship.y_cords[0] &&
  //       y <= ship.y_cords[1] &&
  //       x >= ship.y_cords[0] &&
  //       x <= ship.y_cords[1]
  //     ) {
  //       return (thereIsPlace = false);
  //     }
  //   });

  //   return thereIsPlace;
  // }

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
      if (x !== ship.x_cords[0] && y !== ship.y_cords[0]) {
        return false;
      }
      if (ship.x_cords[0] === ship.x_cords[1] && ship.x_cords[0] === x) {
        if (y >= ship.y_cords[0] && y <= ship.y_cords[1]) {
          ship.obj.hit();
          ship.obj.isSunk();
          this.misses.push([x, y]);
        }
      } else if (ship.y_cords[0] === ship.y_cords[1] && ship.y_cords[0] === y) {
        if (x >= ship.x_cords[0] && x <= ship.x_cords[1]) {
          ship.obj.hit();
          ship.obj.isSunk();
          this.misses.push([x, y]);
        }
      }
    });
  }

  receiveAttack(x, y) {
    if (this.checkMissesArray(x, y)) {
      return false;
    }

    if (!this.checkForPlaceXY(x, y)) {
      this.misses.push([x, y]);
      return false;
    } else {
      this.hitShip(x, y);
      return true;
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => {
      return ship.obj.sunk === true;
    });
  }

  shipsLeft() {
    let left = this.ships.length;
    this.ships.forEach((ship) => {
      if(ship.obj.sunk === true){
        left = left-1
      }
    });
    return left
  }
}

export { Gameboard };
