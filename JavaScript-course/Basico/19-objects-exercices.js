// 1. Crea un objeto con 3 propiedades

let car = {
    name: "Toyota",
    model: "Corolla",
    year: 2020
};

// 2. Accede y muestra su valor

console.log(car.name);
console.log(car.model);
console.log(car.year);

// 3. Agrega una nueva propiedad

car.color = "Blue";
console.log(car);

// 4. Elimina una de las 3 primeras propiedades

delete car.year;
console.log(car);

// 5. Agrega una función e invócala

car.displayInfo = function() {
    console.log(`Name: ${this.name}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
};
car.displayInfo();

// 6. Itera las propiedades del objeto

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}
// 7. Crea un objeto anidado

let owner = {
    name: "John Doe",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};
console.log(owner);

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(owner.address.street);
console.log(owner.address.city);
console.log(owner.address.country);

// 9. Comprueba si los dos objetos creados son iguales

console.log(car == owner);

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(car.model == owner.name);