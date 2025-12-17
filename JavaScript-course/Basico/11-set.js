// set

// Declaracion

let mySet = new Set()

console.log(mySet)


// Inicialización

mySet = new Set([1, 2, 3, 4, 5, "Santiago", "Lima", "Bogotá", "Caracas", "Quito"])
console.log(mySet)

// Metodos comunes

// add y delete

mySet.add("Buenos Aires")

console.log(mySet)

mySet.delete(3)

console.log(mySet)

console.log(mySet.delete("Buenos Aires"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Santiago"))
console.log(mySet.has("Lima"))

// size

console.log(mySet.size)

// convertir un set a un array

let myArray = Array.from(mySet)
console.log(myArray)

mySet = new Set(myArray)
console.log(mySet)

// No admite elementos duplicados

mySet.add("Lima")
mySet.add("Bogotá")
mySet.add("lima")
console.log(mySet)