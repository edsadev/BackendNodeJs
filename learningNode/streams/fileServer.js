const fs = require('fs')
const server = require('http').createServer()

// De esta manera es peligroso ya que el servidor consumira gran parte de la memoria, por ende es mejor usar streams
server.on('request', (req, res) => {
  fs.readFile('./big', (err, data) => {
    if (err) {
      console.error('Error: ', err)
    }
    res.end(data)
  })
})

server.listen(3000)