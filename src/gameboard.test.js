import { Gameboard } from './gameboard';

// testes below are temporary and designed
// to work only one at a time

test('ship is placed', () => {
  let gb = new Gameboard();

  expect(gb.placeShip('horizontal', 3, 1, 2)).toStrictEqual([2, 5]);
});

test('ship is placed verticly', () => {
  let gb = new Gameboard();

  expect(gb.placeShip('vertical', 3, 1, 2)).toStrictEqual([1, 4]);
});

test('it doesnt go off the edges', () => {
  let gb = new Gameboard();

  expect(gb.placeShip('vertical', 3, 8, 2)).toBe(false);
});

test.only('checking for taken places', () => {
  let gb = new Gameboard();
  gb.placeShip('horizontal', 5, 1, 1);

  expect(gb.placeShip('horizontal', 5, 1, 10)).toBe(false);
});

test('checking recieveAttack function', () => {
  let gb = new Gameboard();
  gb.placeShip('vertical', 3, 2, 2);
  gb.receiveAttack(2, 2);
  gb.receiveAttack(2, 2);
  gb.receiveAttack(3, 2);
  gb.receiveAttack(3, 2);
  gb.receiveAttack(4, 2);
  gb.receiveAttack(5, 2);
  expect(gb.ships[0].obj.hitNum).toBe(3);
});

test('checking hitShip', () => {
  let gb = new Gameboard();
  gb.placeShip('vertical', 3, 2, 2);
  // gb.receiveAttack(2, 2);

  expect(gb.hitShip(2, 2)).toBe('x');
});

test('test allShipsSunk', () => {
  let gb = new Gameboard();
  gb.placeShip('vertical', 3, 2, 2);
  gb.receiveAttack(2, 2);
  gb.receiveAttack(3, 2);
  gb.receiveAttack(4, 2);

  gb.placeShip('horizontal', 2, 5, 5);
  gb.receiveAttack(5, 5);
  gb.receiveAttack(5, 6);
  
  expect(gb.allShipsSunk()).toBe(true);
});
