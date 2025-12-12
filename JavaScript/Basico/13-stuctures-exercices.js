// 1. Crea un array que almacene cinco animales

let animals = ['perro', 'gato', 'elefante', 'tigre', 'león']

// 2. Añade dos más. Uno al principio y otro al final

animals.unshift('jirafa') // al principio
animals.push('cebra')    // al final

console.log(animals)

// 3. Elimina el que se encuentra en tercera posición

animals.splice(2, 1) // elimina el elemento en el índice 2 (tercera posición)

console.log(animals)

// 4. Crea un set que almacene cinco libros

let booksSet = new Set(['1984', 'Cien Años de Soledad', 'Don Quijote', 'El Principito', 'la Sombra del Viento'])

// 5. Añade dos más. Uno de ellos repetido

booksSet.add('Harry Potter')
booksSet.add('1984') // repetido, no se añadirá

console.log(booksSet)

// 6. Elimina uno concreto a tu elección

booksSet.delete('Don Quijote')

console.log(booksSet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let monthsMap = new Map([
    [1, 'Enero'],
    [2, 'Febrero'],
    [3, 'Marzo'],
    [4, 'Abril'],
    [5, 'Mayo'],
    [6, 'Junio'],
    [7, 'Julio'],
    [8, 'Agosto'],
    [9, 'Septiembre'],
    [10, 'Octubre'],
    [11, 'Noviembre'],
    [12, 'Diciembre']
])

console.log(monthsMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (monthsMap.has(5)) {
    console.log('El mes número 5 es: ' + monthsMap.get(5))
} else {
    console.log('El mes número 5 no existe en el mapa.')
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

monthsMap.set('verano', ['Junio', 'Julio', 'Agosto'])

console.log(monthsMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let arrayNumbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8]
let setNumbers = new Set(arrayNumbers)

let mapWithSet = new Map()
mapWithSet.set('numerosUnicos', setNumbers)

console.log(mapWithSet)