# Proyecto JavaScript: Ejercicios 1, 2, 3

Este proyecto contiene la implementación de tres ejercicios en JavaScript, junto con pruebas utilizando Jest. A continuación, se detalla la estructura del proyecto y se proporcionan instrucciones mejoradas para su instalación y ejecución, además de la integración con GitHub.

## Estructura del Proyecto

```plaintext
|-- node_modules
|-- src
|   |-- Fibonacci.js
|   |-- Listados.js
|   |-- verificarBisiesto.js
|-- tests
|   |-- fibonacci.test.js
|   |-- listados.test.js
|   |-- verificarBisiesto.test.js
|-- .babelrc
|-- .gitignore
|-- package-lock.json
|-- package.json
|-- README.md
```

- **node_modules:** Carpeta que contiene las dependencias del proyecto.
- **src:** Contiene los archivos fuente de las aplicaciones.
  - **Fibonacci.js:** Implementación de la sucesión de Fibonacci.
  - **Listados.js:** Función para generar listados dinámicos de departamentos y municipios.
  - **verificarBisiesto.js:** Verificación de si un año ingresado es bisiesto.
- **tests:** Contiene los archivos de prueba utilizando Jest.
  - **fibonacci.test.js:** Pruebas para la aplicación de Fibonacci.
  - **listados.test.js:** Pruebas para la función de listados dinámicos.
  - **verificarBisiesto.test.js:** Pruebas para la verificación de año bisiesto.
- **.babelrc:** Configuración del transpilador Babel.
- **package-lock.json:** Registro preciso de las dependencias instaladas.
- **package.json:** Archivo de configuración del proyecto.

# Ejercicio 1: Verificación de Año Bisiesto

**Archivo Fuente:** `verificarBisiesto.js`

**Funcionalidad:**
- Solicita al usuario ingresar un año.
- Verifica si el año ingresado es bisiesto o no.
- Presenta el resultado de la verificación.

**Ejecución:**
Para ejecutar el programa, utiliza el siguiente comando en la terminal:

```bash
node src/verificarBisiesto.js
```
## Ejercicio 2: Sucesión de Fibonacci

**Archivo Fuente:** `Fibonacci.js`

**Funcionalidad:**
- Solicita al usuario ingresar un número.
- Genera la sucesión de Fibonacci hasta el número ingresado.
- Muestra la sucesión resultante.

**Ejecución:**
```bash
node src/Fibonacci.js
```
## Ejercicio 3: Listados Dinámicos

**Archivo Fuente:** `Listados.js`

### Funcionalidad:
Crea una función que muestra dos listados (select) de departamentos y municipios. Al seleccionar un departamento, muestra los municipios correspondientes en el segundo listado (select). Incluye al menos 3 departamentos y 2 municipios para cada departamento.

### Ejecución:
```bash
node src/Listados.js
```
# Instrucciones de Ejecución

## Clonar el Repositorio:

```bash
git clone https://github.com/widacasan/PruebaPGDjs.git

cd PRUEBAPDGJS
```
# Instalación de Dependencias

Para instalar las dependencias, ejecuta el siguiente comando:

```bash
npm install
```
# Ejecutar Pruebas:

```bash
npm test
```
Este comando ejecutará las pruebas utilizando Jest y mostrará los resultados en la consola.

