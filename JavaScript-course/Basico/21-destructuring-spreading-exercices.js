// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let myArray = [10, 20, 30, 40, 50];;
let [firstElement, secondElement] = myArray;
console.log(firstElement);
console.log(secondElement);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [elem1, elem2, elem3 = 100] = myArray;
console.log(elem1);
console.log(elem2);
console.log(elem3);

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let myObject = {
    title: "Developer",
    company: "Tech Co",
    location: "Remote"
};
let {title, company} = myObject;
console.log(title);
console.log(company);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes

let {title: jobTitle, location: jobLocation} = myObject;
console.log(jobTitle);
console.log(jobLocation);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let nestedObject = {
    user: {
        id: 1,
        info: {
            name: "Alice",
            email: "email@example.com",
        }
    }
};
let {user: {info: {name: userName, email: userEmail}}} = nestedObject;
console.log(userName);
console.log(userEmail);

// 6. Usa propagación para combinar dos arrays en uno nuevo

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2];
console.log(combinedArray);

// 7. Usa propagación para crear una copia de un array

let originalArray = [7, 8, 9];
let copiedArray = [...originalArray];
console.log(copiedArray);

// 8. Usa propagación para combinar dos objetos en uno nuevo

let object1 = {a: 1, b: 2};
let object2 = {c: 3, d: 4};
let combinedObject = {...object1, ...object2};
console.log(combinedObject);

// 9. Usa propagación para crear una copia de un objeto

let originalObject = {x: 10, y: 20};
let copiedObject = {...originalObject};
console.log(copiedObject);

// 10. Combina desestructuración y propagación

let fullObject = {...object1, ...object2, e: 5};
let {a, c, e} = fullObject;
console.log(a);
console.log(c);
console.log(e);