// Console por debajo trabaja con una utilidad llamada util format
// Los %algo son como placeholders 
// %s string
// %d numero
// %j Json

console.log('Un %s y un %s', 'Perrito', 'Gatito')

// alias del .log
console.info('Hello World')

// alias de .error
console.warn('Hello Error')

// Te regresa segun la respuesta del booleano, true, no pasa nada, false te lanza un mensaje de assertion failed, util para tests breves
console.assert(42 == '42')
console.assert(42 === '42')

// Igual que el error, pero te indica en donde esta sucediendo el error
// console.trace('Hello')

// Esto es interesante para manejar un ambiente de desarrollo y un ambiente de producción, obviamente en producción no vamos a pasar la variable pero en el ambiente de desarrollo lo que se debería hacer es en nuestra variable de entorno NODE_DEBUG=AlgoSpace
const util = require('util')
const debuglog = util.debuglog('foo')

debuglog('Hello from foo')   


