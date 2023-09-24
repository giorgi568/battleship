import { Gameboard } from './gameboard';

test('ship is placed', () => {
  let gb = new Gameboard();

  expect(gb.placeShip('horizontal', 3, 1, 2)).toStrictEqual([2, 5]);
});

test.only('ship is placed verticly', () => {
  let gb = new Gameboard();

  expect(gb.placeShip('vertical', 3, 1, 2)).toStrictEqual([1, 4]);
});