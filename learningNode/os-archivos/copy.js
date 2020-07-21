const fs = require('fs')

fs.copyFile('stronger.txt', 'verStronger.txt', err => {
  if (err) {
    console.error(err)
  }

  console.log('Stronger ha sido copiado')
})