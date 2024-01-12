 // tests/listados.test.js

const { mostrarListados } = require('../src/Listados'); 

describe('mostrarListados', () => {
  let originalStdoutWrite;
  let originalStdinOn;

  beforeEach(() => {
    // Mock para process.stdout.write
    originalStdoutWrite = process.stdout.write;
    process.stdout.write = jest.fn();

    // Mock para process.stdin.on
    originalStdinOn = process.stdin.on;
    process.stdin.on = jest.fn();
  });

  afterEach(() => {
    // Restaurar mocks después de cada prueba
    process.stdout.write = originalStdoutWrite;
    process.stdin.on = originalStdinOn;
  });

  test('Muestra listado de departamentos correctamente', () => {
    mostrarListados();

    // Verificar que process.stdout.write fue llamado con los departamentos
    expect(process.stdout.write).toHaveBeenCalledWith(expect.stringContaining("Departamentos:"));
    expect(process.stdout.write).toHaveBeenCalledWith(expect.stringContaining("1. Amazonas"));
    expect(process.stdout.write).toHaveBeenCalledWith(expect.stringContaining("2. Antioquia"));
    expect(process.stdout.write).toHaveBeenCalledWith(expect.stringContaining("3. Atlántico"));
  });

  test('Solicita al usuario seleccionar un departamento correctamente', () => {
    mostrarListados();

    // Verificar que process.stdout.write fue llamado con el mensaje de selección
    expect(process.stdout.write).toHaveBeenCalledWith(expect.stringContaining("Seleccione un número de departamento:"));
  });

  // ... Puedes continuar agregando más pruebas según tus necesidades
});
