// Crear un servidor en Express que al recibir un año determine si es bisiesto o no
const app = require('express')()

app.get('/:year', (req, res) => {
  const year = parseInt(req.params.year)
  const esBisiesto = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
  if (esBisiesto) {
    res.send(`${year} es un año bisiesto`)
  } else {
    res.send(`${year} no es un año bisiesto`)
  }
})


app.listen(3000, () => {
  console.log('El servidor esta presente en http://localhost:3000')
})

