const fs = require('fs')

// Con el parámetro recursivo, si los directorios no existen, simplemente los va a crear
fs.mkdir('platzi/escuelaJs/node', { recursive: true }, (err) => {
  if (err) {
    return console.error(err)
  }
})