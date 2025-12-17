// 1. Crea una clase que reciba dos propiedades

class SampleClass {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }
}

// 2. Añade un método a la clase que utilice las propiedades

SampleClass.prototype.showProperties = function() {
  return `Property 1: ${this.prop1}, Property 2: ${this.prop2}`;
}

// 3. Muestra los valores de las propiedades e invoca a la función

let sampleInstance = new SampleClass("Value1", "Value2");
console.log(sampleInstance.showProperties());

// 4. Añade un método estático a la primera clase

SampleClass.staticMethod = function() {
  return "This is a static method.";
}

// 5. Haz uso del método estático

console.log(SampleClass.staticMethod());

// 6. Crea una clase que haga uso de herencia

class ParentClass {
  constructor(parentProp) {
    this.parentProp = parentProp;
  }

  parentMethod() {
    return `Parent Property: ${this.parentProp}`;
  }
}

class ChildClass extends ParentClass {
  constructor(parentProp, childProp) {
    super(parentProp);
    this.childProp = childProp;
  }

  childMethod() {
    return `Child Property: ${this.childProp}`;
  }
}

let childInstance = new ChildClass("ParentValue", "ChildValue");
console.log(childInstance.parentMethod());
console.log(childInstance.childMethod());

// 7. Crea una clase que haga uso de getters y setters

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    
    get age() {
        return this._age;
    }
    set age(newAge) {
        if (newAge >= 0) {
            this._age = newAge;
        } else {
            console.log("Please enter a valid age.");
        }
    }
}

let person = new Person("Alice", 25);
console.log(`Name: ${person.name}, Age: ${person.age}`);

person.name = "Bob";
person.age = 30;
console.log(`Updated Name: ${person.name}, Updated Age: ${person.age}`);

// 8. Modifica la clase con getters y setters para que use propiedades privadas

class Employee {
    #salary;
    
    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }
    
    get salary() {
        return this.#salary;
    }
    
    set salary(newSalary) {
        if (newSalary >= 0) {
            this.#salary = newSalary;
        } else {
            console.log("Please enter a valid salary.");
        }
    }
}

let employee = new Employee("Charlie", 50000);
console.log(`Employee Name: ${employee.name}, Salary: ${employee.salary}`);

employee.salary = 55000;
console.log(`Updated Salary: ${employee.salary}`);

// 9. Utiliza los get y set y muestra sus valores

employee.name = "David";
employee.salary = 60000;
console.log(`Updated Employee Name: ${employee.name}, Updated Salary: ${employee.salary}`);

// 10. Sobrescribe un método de una clase que utilice herencia

class Animal {
    speak() {
        return "The animal makes a sound.";
    }
}

class Dog extends Animal {
    speak() {
        return "The dog barks.";
    }
}

let myDog = new Dog();
console.log(myDog.speak()); // The dog barks.