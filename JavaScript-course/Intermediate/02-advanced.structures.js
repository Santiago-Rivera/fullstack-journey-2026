// Estructuras avanzadas

// Arrays avanzados

// - Metodos funcionales

// forEach

let numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach((number) => {
    console.log(`Número: ${number}`);
});

// map

let doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter

let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce

let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 21

// - Manipulación

// - flat

let nestedArray = [1, [2, [3, 4]], 5];
let flatArray = nestedArray.flat(2);
console.log(flatArray); // [1, 2, 3, 4, 5]

// - flatMap

let words = ["hello world", "foo bar"];
let flattenedWords = words.flatMap((phrase) => phrase.split(" "));
console.log(flattenedWords); // ["hello", "world", "foo", "bar"]

// - Ordenación

// - sort

let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort()
console.log(sorted)

unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b)

console.log(sorted)

// - reverse

sorted.reverse()
console.log(sorted)

// - Búsqueda

// - includes

console.log(sorted.includes(4))
console.log(sorted.includes(5))

// - find

let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven)

// - findIndex

let firstEvenIndex = sorted.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex)

// Sets avanzados

// - Operaciones

// - Eliminación de duplicados

let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]
numbersArray = [...new Set(numbersArray)]
console.log(numbersArray)

// - Unión

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
console.log(union)

// - Intersección

const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection)

// - Diferencia

const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)

// - Conversión

// Set a Array

console.log([...setA])

// - Iteración

// - forEach

setA.forEach(element => console.log(element))

// - Maps avanzados

// - Iteración

let myMap = new Map([
    ["name", "MoureDev"],
    ["age", 37]
])

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// - Conversión

// - Map a Array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// - Map a Objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// - Objeto a Map

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)