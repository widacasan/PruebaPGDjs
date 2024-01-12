import { fibonacciSequence } from "../src/Fibonacci";

test('Secuencia de Fibonacci hasta el 1 debería ser [0]', () => {
    expect(fibonacciSequence(1)).toEqual([0]);
  });
  
  test('Secuencia de Fibonacci hasta el 2 debería ser [0, 1]', () => {
    expect(fibonacciSequence(2)).toEqual([0, 1]);
  });
  
  test('Secuencia de Fibonacci hasta el 6 debería ser [0, 1, 1, 2, 3, 5]', () => {
    expect(fibonacciSequence(6)).toEqual([0, 1, 1, 2, 3, 5]);
  });
  
  test('Secuencia de Fibonacci hasta el 10 debería ser [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', () => {
    expect(fibonacciSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
  
  test('Secuencia de Fibonacci hasta el 15 debería ser [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]', () => {
    expect(fibonacciSequence(15)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]);
  });
  
  test('Secuencia de Fibonacci hasta el 0 debería devolver un mensaje de error', () => {
    expect(fibonacciSequence(0)).toEqual(['El número debe ser un entero mayor que cero']);
  });
  
  test('Secuencia de Fibonacci hasta un número negativo debería devolver un mensaje de error', () => {
    expect(fibonacciSequence(-5)).toEqual(['El número debe ser un entero mayor que cero']);
  });
  
  test('Secuencia de Fibonacci hasta un número no entero debería devolver un mensaje de error', () => {
    expect(fibonacciSequence(3.5)).toEqual(['El número debe ser un entero mayor que cero']);
  });