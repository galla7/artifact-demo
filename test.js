const greet = require('./index');

test('greet returns correct message', () => {
  expect(greet('Mounika')).toBe('Hello, Mounika!');
});
