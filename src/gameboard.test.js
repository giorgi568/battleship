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
  gb.placeShip('vertical', 3, 2, 2);

  expect(gb.placeShip('vertical', 3, 1, 2)).toBe(false);
})