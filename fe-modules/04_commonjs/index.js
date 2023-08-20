const moduleA = require('./moduleA')
const moduleB = require('./moduleB')
const moduleC = require('./moduleC')

console.log(moduleA.math(2, 3)); // 5
console.log(moduleB.name);  // module-b
moduleC.log(2, 3);   // module-b 5
console.log(moduleC.name);; // module-c