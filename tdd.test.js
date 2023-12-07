import * as tdd from './tdd';

test('1 + 2 to equal 3', () => {
  expect(tdd.sum(1, 2)).toBe(3);
});

test('6 - 2 to equal 4', () => {
  expect(tdd.sub(6, 2)).toBe(4);
});
