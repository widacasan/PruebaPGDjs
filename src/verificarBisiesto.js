/**
 * Verifica si un año ingresado es bisiesto.
 *
 * @param {number} año - El año a verificar.
 * @returns {boolean} - true si el año es bisiesto, false de lo contrario.
 */
const esBisiesto = (año) => {
  return año % 400 === 0 ? true :
    año % 100 === 0 ? false :
      año % 4 === 0;
};

module.exports = { esBisiesto };

/**
 * Función principal para interactuar con el usuario y verificar si un año es bisiesto.
 *
 * @function verificarañoBisiesto
 */
function verificarañoBisiesto() {
  process.stdout.write("Ingrese un año para verificar si es bisiesto: ");
  // Escuchar eventos de entrada del usuario
  process.stdin.on("data", (input) => {
    // Convertir la entrada a número y eliminar espacios en blanco
    const año = parseInt(input.toString().trim());
    // Verificar si se proporcionó un año válido
    if (isNaN(año)) {
      process.stdout.write("Por favor, ingrese un año válido: ");
    } else {
      // Verificar si el año es bisiesto y mostrar el resultado
      const resultado = esBisiesto(año) ? "Es bisiesto." : "No es bisiesto.";
      process.stdout.write(`El año ${año} ${resultado}\n`);
      // Pausar la entrada estándar después de mostrar el resultado
      process.stdin.pause();
    }
  });
}

// Llamar a la función para verificar si un año es bisiesto
verificarañoBisiesto();