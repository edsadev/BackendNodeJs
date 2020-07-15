const http = require('http')
const server = http.createServer()

// server funciona con eventos
server.on('request', (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')

  res.end('Hello world!\n')
})

server.listen(8000)
// Esto es solamente informativo
console.log('Servidor en la Url http://localhost:8000')