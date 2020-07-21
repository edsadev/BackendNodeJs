const util = require('util')

const helloPluto = util.deprecate(() => {
  console.log("Hello Pluto")
}, 'Pluto is deprecated. It is not a planet anymore')

helloPluto()

// Esto es bastante util cuando estamos haciendo refactoring y queremos hacerle saber al usuario que hay ciertas funcionalidades que tal vez en una versión posterior va a desaparecer por completo