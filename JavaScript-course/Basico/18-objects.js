// Objectos

// Sintaxis

let person = {
    name: "Santiago",
    age: 21,
    alias: "Sinsinati"
}

// Acceso a propiedades

// Notacion por punto

console.log(person.name)

// Notacion por corchetes

console.log(person["name"])

// Modificacion de propiedad

person.name = "Juan"
console.log(person.name)

console.log(typeof person.age)
person["age"] = "21"
console.log(person.age)
console.log(typeof person.age)

// Eliminacion de propiedades

delete person.alias
console.log(person)

// Añadir propiedades

person.country = "Argentina"
console.log(person)

person["alias"] = "Sinsinati"
console.log(person)

// Metodos

let person2 = {
    name: "Ana",
    age: 25,
    alias: "Anita",
    walk: function() {
        console.log(this.name + " is walking")
    }
}

person2.walk()

// Anidacion de objetos

let person3 = {
    name: "Luis",
    age: 30,
    alias: "Luisito",
    walk: function() {
        console.log(this.name + " is walking")
    },
    address: {
        street: "Main St",
        number: 123,
        city: "Buenos Aires"
    },
    job: {
        title: "Developer",
        company: "Tech Co",
        exp: 5,
        work: function() {
            console.log(`la persona tiene ${this.exp} años trabajando como ${this.title} en ${this.company}`)
        }
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.title)
person3.job.work()

// Igualdad de objetos

let person4 = {
    name: "Juan",
    age: 21,
    country: "Argentina",
    alias: "Sinsinati"
}

console.log(person)
console.log(person4)

console.log(person === person4) // false
console.log(person == person4)  // false

console.log(person.name === person4.name)

// Iteracion sobre objetos

for (let key in person4) {
    console.log(key + ": " + person4[key])
}

// Funciones como objetos

function Person(name, age) { // Deberia ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Carlos", 28)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)