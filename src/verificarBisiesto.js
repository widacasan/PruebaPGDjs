// Función para verificar si un año es bisiesto

// Si un año es divisible por 400, es un año bisiesto.
// De otro modo, si un año es divisible por 100, no es un año bisiesto.
// Por ultimo, si un año es divisible por 4, es un año bisiesto.

const esBisiesto = (año) => {
    return (año % 400 === 0) ? true : 
                (año % 100 === 0) ? false : 
                    año % 4 === 0;
  };
export default esBisiesto;

// Función principal para interactuar con el usuario

function verificarañoBisiesto() {
  process.stdout.write("Ingrese un año para verificar si es bisiesto: ");
  process.stdin.on("data", (input) => {

    // Convertir la entrada a número y eliminar espacios en blanco

    const año = parseInt(input.toString().trim());
    if (isNaN(año)) {
      process.stdout.write("Por favor, ingrese un año válido: ");
    } else {

      // Verificar si el año es bisiesto y mostrar el resultado

      const resultado = esBisiesto(año) ? "Es bisiesto." : "No es bisiesto.";
      process.stdout.write(`El año ${año} ${resultado}\n`);
      process.stdin.pause();
    }
  });
}

// Llamar a la función principal para verificar el año bisiesto

verificarañoBisiesto();
