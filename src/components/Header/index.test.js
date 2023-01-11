const soma = require('./index');

test('Soma de 4 + 4 deve ser 8', () => {
  expect(soma(4, 4)).toBe(8);
 }
)

test('Soma de -4 + 4 deve ser 0', () => {
  expect(soma(-4, 4)).toBe(0);
 }
)

test('Soma de -4 + 4 deve ser 0', () => {
  expect(soma(5, 4)).toBeGreaterThan(5);
 }
)