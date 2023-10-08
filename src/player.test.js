import { Player } from './player';

test('testing availableMoves', () => {
  let p = new Player('pa');
  p.board.receiveAttack(1, 10);
  
  expect(p.availableMoves()).toBe(1);
  // expect(p.board.misses[0]).toBe(p.gb);
});

