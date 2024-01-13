import { esBisiesto } from "../src/verificarBisiesto";

/**
 * Prueba que verifica si el año 2024 es bisiesto.
 *
 * @test {esBisiesto}
 */
test("2024 es un año bisiesto", () => {
  expect(esBisiesto(2024)).toBe(true);
});

/**
 * Prueba que verifica si el año 2023 no es bisiesto.
 *
 * @test {esBisiesto}
 */
test("2023 no es un año bisiesto", () => {
  expect(esBisiesto(2023)).toBe(false);
});

/**
 * Prueba que verifica si el año 2000 es bisiesto.
 *
 * @test {esBisiesto}
 */
test("2000 es un año bisiesto", () => {
  expect(esBisiesto(2000)).toBe(true);
});

/**
 * Prueba que verifica si el año 2100 no es bisiesto.
 *
 * @test {esBisiesto}
 */
test("2100 no es un año bisiesto", () => {
  expect(esBisiesto(2100)).toBe(false);
});
