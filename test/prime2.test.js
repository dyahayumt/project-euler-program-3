const prime = require('../src/prime');

test('Greatest prime factors from 13195', () => {
  expect(prime(13195)).toBe(29);
});