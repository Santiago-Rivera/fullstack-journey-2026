const math = require('./math');

const a = 10;
const b = 5;

console.log(`Addition: ${a} + ${b} = ${math.add(a, b)}`);
console.log(`Subtraction: ${a} - ${b} = ${math.subtract(a, b)}`);
console.log(`Multiplication: ${a} * ${b} = ${math.multiply(a, b)}`);
console.log(`Division: ${a} / ${b} = ${math.divide(a, b)}`);