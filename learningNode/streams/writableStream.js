const { Writable } = require('stream')

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString())
    // Se llama al callback para saber que ha finalizado
    callback()
  }
})

process.stdin.pipe(writableStream)