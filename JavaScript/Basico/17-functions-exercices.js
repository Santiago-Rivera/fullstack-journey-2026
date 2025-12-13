// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum(a, b) {
    return a + b;
}
console.log(sum(4, 7)); // Ejemplo de uso

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([3, 5, 7, 2, 8])); // Ejemplo de uso

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hola Mundo")); // Ejemplo de uso

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function toUpperCaseArray(arr) {
    const uppercased = [];
    for (let str of arr) {
        uppercased.push(str.toUpperCase());
    }
    return uppercased;
}
console.log(toUpperCaseArray(["hola", "mundo"]));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(23));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function commonElements(arr1, arr2) {
    const common = [];
    for (let el of arr1) {
        if (arr2.includes(el)) {
            common.push(el);
        }
    }
    return common;
}
console.log(commonElements([1, 2, 3], [2, 3, 4]));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumEvenNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function squareArray(arr) {
    const squared = [];
    for (let num of arr) {
        squared.push(num * num);
    }
    return squared;
}
console.log(squareArray([1, 2, 3, 4, 5]));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}
console.log(reverseWords("Hola mundo desde JavaScript"));

// 10. Crea una función que calcule el factorial de un número dado

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(11));