// Crear una función en node que reciba una cadena de texto y la convierta en camelCase usando streams
const { Transform } = require('stream')

const transformStream = new Transform({
  transform(chunk, encoding, cb){
    this.push(chunk.toString().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))).replace(/ /g,""))
    cb()
  }
})

process.stdin.pipe(transformStream).pipe(process.stdout)



