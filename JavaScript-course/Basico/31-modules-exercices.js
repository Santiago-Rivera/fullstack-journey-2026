// 1. Exporta una función

export function miFuncion() {
  console.log("Esta es mi funcion exportada.");
}

// 2. Exporta una constante

export const MI_CONSTANTE = 42;

// 3. Exporta una clase

export class MiClase {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}.`);
  }
}

// 4. Importa una función

import { miFuncion } from './31-modules-exercices.js';

miFuncion(); // Esta es mi funcion exportada.

// 5. Importa una constante

import { MI_CONSTANTE } from './31-modules-exercices.js';

console.log(MI_CONSTANTE); // 42

// 6. Importa una clase

import { MiClase } from './31-modules-exercices.js';

const instancia = new MiClase("Carlos");
instancia.saludar(); // Hola, soy Carlos.

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

export default function funcionPorDefecto() {
  console.log("Esta es una funcion exportada por defecto.");
}

export const CONSTANTE_POR_DEFECTO = "Valor por defecto";

export class ClasePorDefecto {
  constructor() {
    console.log("Esta es una clase exportada por defecto.");
  }
}

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

import funcionPorDefecto, { CONSTANTE_POR_DEFECTO, ClasePorDefecto } from './31-modules-exercices.js';

funcionPorDefecto(); // Esta es una funcion exportada por defecto.
console.log(CONSTANTE_POR_DEFECTO); // Valor por defecto
const claseInstancia = new ClasePorDefecto(); // Esta es una clase exportada por defecto.

// 9. Exporta una función, una constante y una clase desde una carpeta

export { miFuncion as funcionDesdeCarpeta, MI_CONSTANTE as constanteDesdeCarpeta, MiClase as claseDesdeCarpeta } from './31-modules-exercices.js';

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

import { funcionDesdeCarpeta, constanteDesdeCarpeta, claseDesdeCarpeta } from './31-modules-exercices.js';

funcionDesdeCarpeta(); // Esta es mi funcion exportada.
console.log(constanteDesdeCarpeta); // 42
const instanciaDesdeCarpeta = new claseDesdeCarpeta("Luis");
instanciaDesdeCarpeta.saludar(); // Hola, soy Luis.
