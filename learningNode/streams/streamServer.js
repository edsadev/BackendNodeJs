const fs = require('fs')
const server = require('http').createServer()

// De esta manera es peligroso ya que el servidor consumira gran parte de la memoria, por ende es mejor usar streams
server.on('request', (req, res) => {
  const src = fs.createReadStream('./big')
  src.pipe(res)
})

server.listen(3000)