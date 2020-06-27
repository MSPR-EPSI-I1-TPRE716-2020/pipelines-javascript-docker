const sum = require('./to-test');
const mult = require('./to-test2');
const div = require('./to-test3');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('mult 2 * 3 to equal 6', () => {
  expect(mult(3, 2)).toBe(6);
});

test('div 8 / 2 to equal 4', () => {
  expect(div(8, 2)).toBe(4);
});