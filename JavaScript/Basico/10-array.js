// array

// Declaración de un array

let myArray =[]
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización de un array

myArray =[3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray =["Santiago", "Lima", "Bogotá", "Caracas", "Quito"]
myArray2 = new Array("Santiago", "Lima", "Bogotá", "Caracas", "Quito")

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] ="Santiago"
myArray2[1] ="Lima"
myArray2[2] ="Bogotá"

console.log(myArray2)

myArray =[]
myArray[0] ="Santiago"
//myArray[1] ="Lima"
myArray[2] ="Bogotá"

console.log(myArray)

// Metodos comunes

myArray=[]

// push y pop

myArray.push("Santiago")
myArray.push("Lima")
myArray.push("Bogotá")
myArray.push("Caracas")
myArray.push("Quito")

console.log(myArray)

console.log("Elemento eliminado: " + myArray.pop())
myArray.pop()

console.log(myArray)

// shift y unshift

myArray.shift()
console.log(myArray)

myArray.unshift("Buenos Aires", "Lusail")
console.log(myArray)

// length

console.log("Tamaño del array: " + myArray.length)

// clear

//myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice
myArray = ["Buenos Aires", "Lusail", "Santiago", "Lima", "Bogotá", "Caracas", "Quito"]

let myNewArray = myArray.slice(1,3)

console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Buenos Aires", "Lusail", "Santiago", "Lima", "Bogotá", "Caracas", "Quito"]

myArray.splice(1, 2, 3)
console.log(myArray)