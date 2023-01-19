import React from 'react';
import {render, screen} from '@testing-library/react'
import Header from './index';

// Teste de componente
test('use jsdom in this test file', () => {
  render(<Header />)
  const aboutAnchorNode = screen.getByText(/Header/i)
  expect(aboutAnchorNode).toBeTruthy();
});


const soma = require('./soma');

// True, False, Null, Undefined
test('Null', () => {
  const n = null

  expect(n).toBeNull();
})

test('undefined', () => {
  const u = 1

  expect(u).toBeDefined();
})

test('true', () => {
  const t = true

  expect(t).toBeTruthy();
})

test('true', () => {
  const f = false

  expect(f).toBeFalsy();
})


//Number
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


//String
test('existe r em Christoph', () => {
  expect('Christoph').toMatch(/r/);
})

test('não existe r em Christoph', () => {
  expect('Christoph').not.toMatch(/y/);
})

//Array
const shoppingList = [
  'fraldas',
  'kleenex',
  'sacos de lixo',
  'papel toalha',
  'leite',
];

test('a lista de compras tem leite nela', () => {
  expect(shoppingList).toContain('leite');
});

test('a lista de compras tem leite nela', () => {
  expect(shoppingList).not.toContain('  ');
});