// Exportacion de modulos

export const nombre = "Juan";
export const edad = 30;

export function saludar() {
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
}

export class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Exportacion por defecto
const PI = 3.14159;
export default PI;

// Otra forma de exportar
const apellido = "Perez";
const ciudad = "Madrid";

export { apellido, ciudad };

// Exportacion de una funcion anonima por defecto

function functionA() {
  console.log("Esta es una funcion anonima exportada por defecto.");
}

export { functionA };