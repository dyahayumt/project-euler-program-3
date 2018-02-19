const each = require('jest-each');
const isPrime = require('../src/prime');

each([
    [13195,29],
    [600851475143,6857],
]).describe('.isPrime(%s)',(a, expected) => {
    test('return ${expected}', () => {
            expect(isPrime(a)).toBe(expected);
	})
})
