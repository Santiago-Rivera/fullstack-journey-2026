// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let name = "Juan"

if (name === "Juan") {
    console.log("Mi nombre es Juan")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let username = "admin"
let password = "1234"

if (username === "admin" && password === "1234") {
    console.log("Acceso concedido")
} else {
    console.log("Acceso denegado")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = -5

if (number > 0) {
    console.log("El número es positivo")
} else if (number < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let personAge = 16

if (personAge >= 18) {
    console.log("Puede votar")
} else {
    console.log(`No puede votar, le faltan ${18 - personAge} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad 

let status = personAge >= 18 ? "adulto" : "menor"
console.log(`La persona es un ${status}`)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = 4 // 1-12

if (month == 12 || month == 1 || month == 2) {
    console.log("Estamos en invierno")
} else if (month >= 3 && month <= 5) {
    console.log("Estamos en primavera")
} else if (month >= 6 && month <= 8) {
    console.log("Estamos en verano")
} else if (month >= 9 && month <= 11) {
    console.log("Estamos en otoño")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (month == 2) {
    console.log("Febrero tiene 28 o 29 días")
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log("Este mes tiene 30 días")
} else {
    console.log("Este mes tiene 31 días")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "es"

switch (language) {
    case "es":
        console.log("Hola")
        break
    case "en":
        console.log("Hello")
        break
    case "fr":
        console.log("Bonjour")
        break
    default:
        console.log("Idioma no soportado")
        break
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (month) {
    case 1:
        console.log("Estamos en invierno")
        break
    case 2:
        console.log("Estamos en invierno")
        break
    case 3:
        console.log("Estamos en primavera")
        break
    case 4:
        console.log("Estamos en verano")
        break
    case 5:
        console.log("Estamos en otoño")
        break
    default:
        console.log("Mes no válido")
        break
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (month) {
    case 1:
        console.log("Enero tiene 31 días")
        break
    case 2:
        console.log("Febrero tiene 28 o 29 días")
        break
    case 3:
        console.log("Marzo tiene 31 días")
        break
    case 4:
        console.log("Abril tiene 30 días")
        break
    case 5:
        console.log("Mayo tiene 31 días")
        break
    case 6:
        console.log("Junio tiene 30 días")
        break
    case 7:
        console.log("Julio tiene 31 días")
        break
    case 8:
        console.log("Agosto tiene 31 días")
        break
    case 9:
        console.log("Septiembre tiene 30 días")
        break
    case 10:
        console.log("Octubre tiene 31 días")
        break
    case 11:
        console.log("Noviembre tiene 30 días")
        break
    case 12:
        console.log("Diciembre tiene 31 días")
        break
    default:
        console.log("Mes no válido")
        break
}
console.log("Fin del programa")