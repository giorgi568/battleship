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
      }
    }

    this.ships.push(shipObj);

    return this.ships[0].y_cords;
  }
}

export { Gameboard };
