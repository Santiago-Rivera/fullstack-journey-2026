// Map

// Declaracion

let myMap = new Map()

console.log(myMap)

// Inicialización

myMap = new Map([
    ['nombre', 'Juan'],
    ['edad', 30],
    ['ciudad', 'Madrid']
])

console.log(myMap)

// Metodos y propiedades

// set

myMap.set('profesion', 'Desarrollador')
myMap.set('ciudad', 'Barcelona')

console.log(myMap)

// get

console.log(myMap.get('nombre'))
console.log(myMap.get('profesion'))

// has

console.log(myMap.has('edad'))
console.log(myMap.has('pais'))

// delete

myMap.delete('edad')

console.log(myMap)

// clear

myMap.clear()

console.log(myMap)

// keys

myMap.keys()

console.log(myMap)

// values

myMap.values()

console.log(myMap)

// size

myMap.set('nombre', 'Ana')
myMap.set('edad', 25)

console.log(myMap.size)