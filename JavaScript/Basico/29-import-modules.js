// Importacion de modulos

// Importacion de variables y funciones nombradas
import { nombre, edad, saludar, Persona } from './28-export-modules.js';

console.log(nombre); // Juan
console.log(edad);   // 30
saludar();          // Hola, mi nombre es Juan y tengo 30 años.

const persona1 = new Persona("Ana", 25);
persona1.presentarse(); // Hola, soy Ana y tengo 25 años.

// Importacion del valor por defecto
import PI from './28-export-modules.js';

console.log(PI); // 3.14159

// Importacion de otras variables nombradas
import { apellido, ciudad } from './28-export-modules.js';

console.log(apellido); // Perez
console.log(ciudad);   // Madrid

// Importacion de la funcion anonima exportada por defecto
import { functionA } from './28-export-modules.js';

functionA(); // Esta es una funcion anonima exportada por defecto.