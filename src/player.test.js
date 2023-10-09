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

test.only('testing randomMove', () => {
  let p = new Player('pa');
  p.board.receiveAttack(1, 10);
  
  expect(p.randomMove()).toBe(1);
  // expect(p.board.misses[0]).toBe(p.gb);
});