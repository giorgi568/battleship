import { Ship } from './ship';
let ship = new Ship(3);

test('ship method functions correctly', () => {
  ship.hit();
  expect(ship.hitNum).toBe(1);
});

test('isSunk method runs correctly', () => {
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});

test('isSunk method runs correctly', () => {
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});