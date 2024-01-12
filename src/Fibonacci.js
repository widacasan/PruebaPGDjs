// Se realiza módulo readline para manejar la entrada y salida en la consola
const readline = require("readline");

// Crear una interfaz de lectura/escritura para interactuar con el usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para generar la sucesión de Fibonacci hasta el n-ésimo término
function fibonacciSequence(n) {
  // Verificar si el número es un entero mayor que cero
  if (!Number.isInteger(n) || n <= 0) {
    return ["El número debe ser un entero mayor que cero"];
  }

  // Inicializar el array de la sucesión de Fibonacci
  const sequence = [];

  // Calcular la sucesión de Fibonacci hasta el n-ésimo término
  for (let i = 0; i < n; i++) {
    // Caso base: primer término (0)
    if (i === 0) {
      sequence.push(0);
    }
    // Caso base: segundo término (1)
    else if (i === 1) {
      sequence.push(1);
    }
    // Resto de los términos se calculan sumando los dos términos anteriores
    else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }

  // Devolver la sucesión de Fibonacci
  return sequence;
}

// Solicitar al usuario ingresar un número
rl.question("Por favor, ingrese un número: ", (input) => {
  // Convertir la entrada a un número entero
  const n = parseInt(input);

  // Verificar si se proporcionó un número válido
  if (isNaN(n)) {
    console.log("Por favor, ingrese un número válido.");
  } else {
    // Generar y mostrar la sucesión de Fibonacci hasta el número ingresado
    const result = fibonacciSequence(n);
    console.log(
      `Sucesión de Fibonacci hasta el ${n}-ésimo término: ${result.join(", ")}`
    );
  }

  // Cerrar la interfaz después de la interacción
  rl.close();
  
});

// Exportar la función fibonacciSequence para su uso en otros módulos
module.exports = { fibonacciSequence };
