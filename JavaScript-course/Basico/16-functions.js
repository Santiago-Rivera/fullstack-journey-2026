// funciones

// Simples

function myFunc () {
    console.log("¡Hola, función!");
}

for (let i = 0; i < 5; i++) {
    myFunc();
}

// Con parámetros

function myFuncWithParams(name) {
    console.log("¡Hola, " + name + "!");
}

myFuncWithParams("Ana");
myFuncWithParams("Luis");

//Funciones anonimas

const myFunc2 = function(name) {
    console.log("¡Hola, " + name + "!");
}

myFunc2("Carlos");

// Funciones con valor de retorno

function sum(a, b) {
    return a + b;
}

const result = sum(3, 5);
console.log("La suma es: " + result);

// Funciones flecha (arrow functions)

const multiply = (a, b) => {
    return a * b;
}

const product = multiply(4, 6);
console.log("El producto es: " + product);

// Funciones flecha con retorno implícito

const divide = (a, b) => a / b;

const quotient = divide(20, 4);
console.log("El cociente es: " + quotient);

// Funciones como parámetros (callbacks)

function greet(name, callback) {
    const message = "¡Hola, " + name + "!";
    callback(message);
}

greet("Marta", function(msg) {
    console.log(msg);
});

// Uso de funciones flecha como callbacks

greet("Jorge", (msg) => {
    console.log(msg);
});

// Funciones recursivas

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const fact5 = factorial(5);
console.log("El factorial de 5 es: " + fact5);

// Funciones autoejecutables (IIFE)

(function() {
    console.log("¡Esta función se ejecuta automáticamente!");
})();

// IIFE con parámetros

(function(name) {
    console.log("¡Hola desde una IIFE, " + name + "!");
})("Sofía");

// forEach con funciones

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log("Número: " + num);
});

// forEach con funciones flecha

numbers.forEach(num => console.log("Número (flecha): " + num));