import { Ship } from './ship';

class Gameboard {
  constructor() {
    this.ships = [];
  }

  placeShip(direction, length, x_cor, y_cor) {
    let ship = new Ship(length);

    let shipObj = {};
    shipObj.obj = ship;
    if (direction === 'horizontal') {
      if (y_cor + ship.length <= 10) {
        shipObj.x_cords = [x_cor, x_cor];
        shipObj.y_cords = [y_cor, y_cor + ship.length];
      } else {
        return false;
      }
    } else if (direction === 'vertical') {
      if (x_cor + ship.length <= 10) {
        shipObj.y_cords = [y_cor, y_cor];
        shipObj.x_cords = [x_cor, x_cor + ship.length];
      } else {
        return false;
      }
    }

    if (
      !this.checkForPlacX(shipObj.x_cords[0], shipObj.x_cords[1]) ||
      !this.checkForPlacY(shipObj.y_cords[0], shipObj.y_cords[1])
    ) {
      return false;
    }
    
    this.ships.push(shipObj);

    return this.ships[0].x_cords;
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
}

export { Gameboard };
