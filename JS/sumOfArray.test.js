const sumOfArray = require('./sumOfArray');

test('sumOfArray function exists', () => {
    expect(sumOfArray).toBeDefined();
});

test('sumOfArray returns a number', () => {
    expect(typeof sumOfArray([1, 2, 3])).toBe('number');
});

test('sumOfArray returns 6 when given [1, 2, 3]', () => {
    expect(sumOfArray([1, 2, 3])).toBe(6);
});