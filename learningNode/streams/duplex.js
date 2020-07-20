const { Duplex } = require('stream')
const { read } = require('fs')

const duplexStream = new Duplex({
  write(chunk, encoding, cb) {
    console.log(chunk.toString())
    cb()
  },
  read(size) {
    if (this.currentCharCode > 90) {
      this.push(null)
      return
    }

    setTimeout(() => {
      this.push(String.fromCharCode(this.currentCharCode++))
    }, 100)
  }
})

duplexStream.currentCharCode = 65
process.stdin.pipe(duplexStream).pipe(process.stdout)