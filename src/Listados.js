// Función para mostrar un listado de departamentos y municipios
function mostrarListados() {
    // Objeto que contiene departamentos como claves y arrays de municipios como valores
    const departamentos = {
      "Amazonas": ["Leticia", "Puerto Nariño"],
      "Antioquia": ["Medellín", "Bello", "Envigado"],
      "Atlántico": ["Barranquilla", "Soledad", "Malambo"]
    };
  
    /**
     * Muestra la lista de departamentos y solicita al usuario que seleccione un número de departamento.
     *
     * @function showDepartamentos
     */
    function showDepartamentos() {
      process.stdout.write("Departamentos:\n");
      Object.keys(departamentos).forEach((departamento, index) => {
        process.stdout.write(`${index + 1}. ${departamento}\n`);
      });
      process.stdout.write("Seleccione un número de departamento: ");
    }
  
    // Escuchar eventos de entrada de usuario
    process.stdin.on("data", (input) => {
      // Convertir la entrada a un número entero
      const selectedOption = parseInt(input.toString().trim());
  
      // Verificar si la opción seleccionada es válida
      if (selectedOption >= 1 && selectedOption <= Object.keys(departamentos).length) {
        // Obtener el nombre del departamento seleccionado
        const selectedDepartamento = Object.keys(departamentos)[selectedOption - 1];
  
        // Obtener la lista de municipios para el departamento seleccionado
        const municipios = departamentos[selectedDepartamento];
  
        // Mostrar la lista de municipios
        process.stdout.write(`Municipios de ${selectedDepartamento}:\n`);
        municipios.forEach((municipio) => {
          process.stdout.write(`- ${municipio}\n`);
        });
  
        // Pausar la entrada estándar
        process.stdin.pause();
      } else {
        // Mostrar mensaje de error si la opción no es válida
        process.stdout.write("Opción no válida. Por favor, seleccione un número de departamento válido: ");
      }
    });
  
    // Llamar a la función para mostrar los listados
    showDepartamentos();
  }
  
  // Llamar a la función para mostrar los listados
  mostrarListados();
  