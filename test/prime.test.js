const prime = require('../src/prime');

test('Greatest prime factors from 600851475143', () => {
  expect(prime(600851475143)).toBe(6857);
});