// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

let nums = [10, 15, 20, 25, 30];

let squared = nums.map(n => n * n);
let greaterThan200 = squared.filter(n => n > 200);
let total = greaterThan200.reduce((acc, curr) => acc + curr, 0);

console.log(squared); // [100, 225, 400, 625, 900]
console.log(greaterThan200); // [225, 400, 625, 900]
console.log(total); // 2150

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

let numbers = [1, 2, 3, 4, 5];

let cubedEvens = numbers.map(n => n ** 3).filter(n => n % 2 === 0);
console.log(cubedEvens); // [8, 64]

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

let nested = [1, [2, [3, 4]], 5];
let flatNested = nested.flat(2);
console.log(flatNested); // [1, 2, 3, 4, 5]

let phrases = ["good morning", "good night"];
let wordsFlatMap = phrases.flatMap(phrase => phrase.split(" "));
console.log(wordsFlatMap); // ["good", "morning", "good", "night"]

// 4. Ordena un array de números de mayor a menor

let unsortedNumbers = [5, 2, 9, 1, 5, 6];
let sortedDesc = unsortedNumbers.sort((a, b) => b - a);
console.log(sortedDesc); // [9, 6, 5, 5, 2, 1]

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

let union = new Set([...setA, ...setB]);
let intersection = new Set([...setA].filter(x => setB.has(x)));
let difference = new Set([...setA].filter(x => !setB.has(x)));

console.log(union); // Set {1, 2, 3, 4, 5, 6}
console.log(intersection); // Set {3, 4}
console.log(difference); // Set {1, 2}

// 6. Itera los resultados del ejercicio anterior

for (let value of union) {
  console.log(value);
}

for (let value of intersection) {
  console.log(value);
}

for (let value of difference) {
  console.log(value);
}

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

let usersMap = new Map();
usersMap.set(1, { name: "Alice", age: 25, email: "email@example.com" });
usersMap.set(2, { name: "Bob", age: 17, email: "email€example.com" });

usersMap.forEach((user, id) => {
  console.log(
    `ID: ${id}, Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`
  );
});

// 8. Dado el mapa anterior, crea un array con los nombres

let namesArray = Array.from(usersMap.values()).map(user => user.name);
console.log(namesArray); // ["Alice", "Bob"]

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

let adultEmailsSet = new Set(
  Array.from(usersMap.values())
    .filter((user) => user.age >= 18)
    .map((user) => user.email)
);
console.log(adultEmailsSet);
// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

let usersObj = Object.fromEntries(usersMap);
console.log(usersObj);

let emailKeyedMap = new Map();
for (let user of Object.values(usersObj)) {
  emailKeyedMap.set(user.email, user);
}
console.log(emailKeyedMap);