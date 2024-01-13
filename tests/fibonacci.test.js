const { fibonacciSequence } = require('../src/Fibonacci'); 

/**
 * Prueba la generación de la secuencia de Fibonacci hasta un determinado número.
 *
 * @test {fibonacciSequence}
 */
test('Secuencia de Fibonacci hasta el 1 debería ser [0]', () => {
  expect(fibonacciSequence(1)).toEqual([0]);
});

/**
 * Prueba la generación de la secuencia de Fibonacci hasta el número 2.
 *
 * @test {fibonacciSequence}
 */
test('Secuencia de Fibonacci hasta el 2 debería ser [0, 1]', () => {
  expect(fibonacciSequence(2)).toEqual([0, 1]);
});

/**
 * Prueba la generación de la secuencia de Fibonacci hasta el número 6.
 *
 * @test {fibonacciSequence}
 */
test('Secuencia de Fibonacci hasta el 6 debería ser [0, 1, 1, 2, 3, 5]', () => {
  expect(fibonacciSequence(6)).toEqual([0, 1, 1, 2, 3, 5]);
});

/**
 * Prueba la generación de la secuencia de Fibonacci hasta el número 10.
 *
 * @test {fibonacciSequence}
 */
test('Secuencia de Fibonacci hasta el 10 debería ser [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', () => {
  expect(fibonacciSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

/**
 * Prueba la generación de la secuencia de Fibonacci hasta el número 15.
 *
 * @test {fibonacciSequence}
 */
test('Secuencia de Fibonacci hasta el 15 debería ser [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]', () => {
  expect(fibonacciSequence(15)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]);
});

/**
 * Prueba que intenta generar la secuencia de Fibonacci hasta el número 0 y espera un mensaje de error.
 *
 * @test {fibonacciSequence}
 */
test('Secuencia de Fibonacci hasta el 0 debería devolver un mensaje de error', () => {
  expect(fibonacciSequence(0)).toEqual(['El número debe ser un entero mayor que cero']);
});

/**
 * Prueba que intenta generar la secuencia de Fibonacci hasta un número negativo y espera un mensaje de error.
 *
 * @test {fibonacciSequence}
 */
test('Secuencia de Fibonacci hasta un número negativo debería devolver un mensaje de error', () => {
  expect(fibonacciSequence(-5)).toEqual(['El número debe ser un entero mayor que cero']);
});

/**
 * Prueba que intenta generar la secuencia de Fibonacci hasta un número no entero y espera un mensaje de error.
 *
 * @test {fibonacciSequence}
 */
test('Secuencia de Fibonacci hasta un número no entero debería devolver un mensaje de error', () => {
  expect(fibonacciSequence(3.5)).toEqual(['El número debe ser un entero mayor que cero']);
});
