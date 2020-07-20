const { Readable } = require('stream')
const readableStream = new Readable()

readableStream.push(`${0/0}`.repeat(16).concat(' Batman, Batman!'))
// Para saber que dejo de recibir datos, push(null)
readableStream.push(null)

readableStream.pipe(process.stdout)