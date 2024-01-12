import {esBisiesto} from "../src/verificarBisiesto";

test("2024 es un año bisiesto", () => {
  expect(esBisiesto(2024)).toBe(true);
});
test("2023 no es un año bisiesto", () => {
  expect(esBisiesto(2023)).toBe(false);
});
test("2000 es un año bisiesto", () => {
  expect(esBisiesto(2000)).toBe(true);
});
test("2100 no es un año bisiesto", () => {
  expect(esBisiesto(2100)).toBe(false);
});
