import * as tdd from './tdd';

test('capitalize string', () => {
  expect(tdd.capitalize('string')).toBe('String');
});

test('reverse string', () => {
  expect(tdd.reverseString('string')).toBe('gnirts');
});

test('calculator add', () => {
  expect(tdd.calculator().add(2, 1)).toBe(3);
});
test('calculator subtract', () => {
  expect(tdd.calculator().sub(2, 1)).toBe(1);
});
test('calculator divide', () => {
  expect(tdd.calculator().div(4, 2)).toBe(2);
});
test('calculator multiply', () => {
  expect(tdd.calculator().mult(2, 3)).toBe(6);
});

test('caesar cypher abc -> def', () => {
  expect(tdd.caesarCipher('abc', 3)).toBe('def');
});
test('caesar cypher xyz -> abc', () => {
  expect(tdd.caesarCipher('xyz', 3)).toBe('abc');
});
test('caesar cypher AbC -> DeF', () => {
  expect(tdd.caesarCipher('AbC', 3)).toBe('DeF');
});
test('caesar cypher XyZ -> AbC', () => {
  expect(tdd.caesarCipher('XyZ', 3)).toBe('AbC');
});
test('caesar cypher FGh? -> IJk?', () => {
  expect(tdd.caesarCipher('FGh?', 3)).toBe('IJk?');
});

test('analyze array', () => {
  expect(tdd.analyzeArray([3, 5, 7, 9])).toEqual({
    average: 6,
    min: 3,
    max: 9,
    length: 4,
  });
});
