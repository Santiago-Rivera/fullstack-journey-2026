// Destructuración

let myArray = [1, 2, 3, 4, 5];

let person = {
    name: "John",
    age: 30,
    city: "New York"
}
myArray.push(6);
console.log(myArray);

let myValue = myArray[1]
console.log(myValue);

let myName = person.name;
console.log(myName);

// Destructuración

// Sintaxis de arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray;
console.log(myValue0)
console.log(myValue1);
console.log(myValue2);
console.log(myValue3);
console.log(myValue4);

// Sintaxis de arrays con valores predeterminados

[myValue6, myValue7, myValue8, myValue9, myValue10 = 0] = myArray;
console.log(myValue6)
console.log(myValue7);
console.log(myValue8);
console.log(myValue9);
console.log(myValue10);

// Ignorar elementos array

let [myValue11, , myValue13] = myArray;
console.log(myValue11);
console.log(myValue13);

// Sintaxis de objetos

let {name, age, city} = person;
console.log(name);
console.log(age);
console.log(city);

// Sintaxis de objetos con valores predeterminados

let {name: personName, age: personAge, country = "USA"} = person;
console.log(personName);
console.log(personAge);
console.log(country);

// Sintaxis de objetos con nuevos nombres de variables

let {name: newName, age: newAge, city: newCity} = person;
console.log(newName);
console.log(newAge);
console.log(newCity);

// Objetos anidados

let student = {
    name: "Alice",
    grades: {
        math: 90,
        english: 85
    },
    address: {
        street: "123 Main St",
        city: "Wonderland"
    },
    collage: {
        name: "Wonderland University",
        year: 2022
    },
    hobbies: ["reading", "painting", "gaming"],
    booksSet: [
        {title: "Adventures in Wonderland", author: "Lewis Carroll"},
        {title: "Through the Looking-Glass", author: "Lewis Carroll"}
    ]
}

let {name: studentName, grades: {math, english}, address: {street}, collage: {name: collageName, year}, hobbies, booksSet} = student;
console.log(studentName);
console.log(math);
console.log(english);
console.log(street);
console.log(collageName);
console.log(year);
console.log(hobbies);
console.log(booksSet);

// Propagación (Spreading)

// Sintaxis arrays

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let myArray3 = [...array1, ...array2];

let combinedArray = [...array1, ...array2];
console.log(combinedArray);
console.log(myArray3);

// Comvinación de arrays

let myArray4 = [0, ...array1, ...array2, 7];
console.log(myArray4);

// Sintaxis objetos

let person4 = { ...person, country: "USA", profession: "Developer" };
console.log(person4);

// Combinación de objetos

let person5 = { ...person }

console.log(person5);