// Crear un servidor que reciba tu fecha de cumpleaños y devuelva el dia de la semana que naciste
const http = require('http')
const moment = require('moment')
const server = http.createServer()

server.on('request', (req, res) => {
  if (req.method === 'POST'){
    let body = []
    req
      .on('data', chunk => {
        body.push(chunk)
      })
      .on('end', () => {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        body = Buffer.concat(body).toString()
        const birthDate = moment(body, 'YYYY-MM-DD').format('dddd')
        res.end(birthDate)
      })
  } else {
    res.statusCode = 404
    res.end()
  }
})

server.listen(8000)
console.log('Servidor en la Url http://localhost:8000')