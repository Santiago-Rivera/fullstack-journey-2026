// if, else if, else

// if

let age = 37

if (age == 37) {
    console.log("la edad es 37")
}

// else

if (age == 37) {
    console.log("la edad es 37")
} else {
    console.log("la edad no es 37")
}

// else if

if (age == 37) {
    console.log("la edad es 37")
}else if (age < 18) {
    console.log("Es menor de edad")
}else {
    console.log("la edad no es 37 ni es menor de edad")
}

// Operadores ternarios

const message = age == 37 ? "la edad es 37" : "la edad no es 37"
console.log(message)

// switch

let day = 0
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Día inválido"
}

console.log(`${dayName}`)