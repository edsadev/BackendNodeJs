const app = require('express')()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer() // Para datos tipo multipart/form-data: Cada valor es enviado como un dato de bloque ("input de un formulario"), con un delimitador como separador definido por el usuario ("espacio entre campos"). Éstas llaves son colocadas en el Content-Disposition , la cual es cómo está estructurada cada parte del HEADER en una petición HTTP

// El content type es seleccionado poniendo la cadena de texto adecuada en el atributo enctype del elemento <form> o el atributo formenctype  de los elementos <input> o <button> :

app.use(bodyParser.json()) // Para datos tipo applicaction/json
app.use(bodyParser.urlencoded({ extended: true })) // Para datos tipo application/x-www-form-urlencoded: Los valores son codificados en tuplas llave-valor separadas por '&', con un '='  entre la llave y el valor. Caracteres no-Alfanumericos en ambas (llaves, valores) son percent encoded: Esta es la razón por la cual este tipo no es adecuado para usarse con datos binarios (use multipart/form-data en su lugar)

app.post('/profile', upload.array(), (req, res, next) => {
  console.log(req.body)
  res.json(req.body)
  next()
})