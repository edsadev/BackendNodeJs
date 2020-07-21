const express = require('express')
const app = express()

const { config } = require('./config/index')

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.get('/json', function(req, res) {
  res.json({'Hello World!': 'Nice!'})
})

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`)
})