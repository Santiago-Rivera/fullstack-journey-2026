// Clases

// Definición de una clase
class Person {
  // Método constructor
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

// Crear una instancia de la clase

let person1 = new Person("Juan", 30, "jdoe");
let person2 = new Person("Ana", 25, "adoe");

console.log(person1);
console.log(person2);

console.log(typeof Person);

// Valores por defecto

class Car {
  constructor(brand = "Toyota", model = "Corolla", year = 2020) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

let car1 = new Car();
let car2 = new Car("Honda", "Civic", 2022);

console.log(car1);
console.log(car2);

// Acceso a propiedades

console.log(person1.name); // Juan
console.log(car2.model);   // Civic

// Modificación de propiedades

person1.age = 31;
car1.year = 2021;

console.log(person1);
console.log(car1);

// Funciones en clases

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Método para calcular el área
  area() {
    return this.width * this.height;
  }
}

let rect = new Rectangle(5, 10);
console.log(`Área del rectángulo: ${rect.area()}`); // Área del rectángulo: 50

// Getters y Setters

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Getter para el diámetro
  get diameter() {
    return this.radius * 2;
  }

  // Setter para el radio
  set diameter(diameter) {
    this.radius = diameter / 2;
  }
}

let circle = new Circle(5);
console.log(`Diámetro: ${circle.diameter}`); // Diámetro: 10

circle.diameter = 20;
console.log(`Nuevo radio: ${circle.radius}`); // Nuevo radio: 10

// Herencia

class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} hace un sonido.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} ladra.`);
  }
}

let dog = new Dog("Rex");
dog.speak(); // Rex ladra.

class Cat extends Animal {
  speak() {
    console.log(`${this.name} maúlla.`);
  }
}

let cat = new Cat("Mittens");
cat.speak(); // Mittens maúlla.

class Bird extends Animal {
  speak() {
    console.log(`${this.name} canta.`);
  }
}

let bird = new Bird("Tweety");
bird.speak(); // Tweety canta.

class Fish extends Animal {
  speak() {
    console.log(`${this.name} hace burbujas.`);
  }
}

let fish = new Fish("Nemo");
fish.speak(); // Nemo hace burbujas.

// Métodos estáticos

class MathUtils {
  static sum(a, b) {
    return a + b;
  }

  static rest(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

    static divide(a, b) {
    return a / b;
  }

  static model(a, b) {
    return a % b;
  }
}

console.log(MathUtils.sum(5, 10)); // 15
console.log(MathUtils.rest(10, 5)); // 5
console.log(MathUtils.multiply(4, 3)); // 12
console.log(MathUtils.divide(20, 4)); // 5
console.log(MathUtils.model(10, 3)); // 1