import { Player } from './player';

// tests are not supposed to pass all at once
// tests do not make sense
// this tests are horrible if you are trying to understand
// they were useful once

test('testing availableMoves', () => {
  let p = new Player('pa');
  p.board.receiveAttack(1, 10);

  expect(p.availableMoves()).toBe(1);
  // expect(p.board.misses[0]).toBe(p.gb);
});

test('testing randomMove', () => {
  let p = new Player('pa');
  p.board.receiveAttack(1, 10);

  expect(p.randomMove()).toBe(1);
  // expect(p.board.misses[0]).toBe(p.gb);
});

test('testing randomBoat', () => {
  let p = new Player('pa');
  p.randomBoat(5);
  p.randomBoat(3);
  p.randomBoat(3);
  // p.randomBoat(2);
  // p.randomBoat(3);

  expect(p.randomBoat(5)).toBe(p.board.ships);
  // expect(p.board.misses[0]).toBe(p.gb);
});
test.only('testing randomBoard', () => {
  let p = new Player('pa');
  expect(p.randomBoard()).toBe(p.board.ships);
  // expect(p.board.misses[0]).toBe(p.gb);
});
