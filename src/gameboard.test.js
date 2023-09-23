import { Gameboard } from './gameboard';

test('ship is placed', () => {
  let gb = new Gameboard();

  expect(gb.placeShip('horizontal', 3, 1, 2)).toStrictEqual([2, 5]);
});

