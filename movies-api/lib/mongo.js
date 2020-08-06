const { MongoClient, ObjectId } = require('mongodb')
const { config } = require('../config')

/* Defino mi variables con mis variables de entorno que estan en mi archivo de config */
/* encodeURIComponent nos permite resolver el caso de si nos viene con algún caracter especial, codifica un string a un componente valido en URI */
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.port}/${DB_NAME}?retryWrites=true&w=majority`

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true } /*Para tener la última configuración*/)
    this.dbName = DB_NAME
  }

  /* Patrón singleton -> La idea es que cada vez que nos conectemos a nuestra base de datos no nos cree un nuevo cliente, sino que si
  el cliente ya está o sea que la conexión ya está abierta, pues usemos esa misma conexión, así logramos evitar saturar muchas 
  conexiones y que tengamos un error en el futuro */

  connect() {
    if (MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            reject(err) /* Si hay algún error, rechazo la promesa y muestro el error */
          }

          console.log('Connected succesfully to mongo') /* Agrego este console para luego el debuggeo */
          resolve(this.client.db(this.dbName)) /* Si no hay error, resuelvo la promesa pasandole al cliente el nombre de la DB */
        })
      })
    }
    return MongoLib.connection /* Retorno si no existe la conexión, la conexión recién creada */
  }

  getAll(collection, query) {
    return this.connect().then(db => {
      return db.collection(collection).find(query).toArray()
    })
  }

  get(collection, id) {
    return this.connect().then(db => {
      return db.collection(collection).findOne({ _id: ObjectId(id) })
    })
  }

  create(collection, data) {
    return this.connect().then(db => {
      return db.collection(collection).insertOne(data)
    }).then(result => result.insertedId)
  }

  update(collection, id, data) {
    return this.connect().then(db => {
      return db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true })
    }).then(result => result.upsertedId || id)
  }

  delete(collection, id) {
    return this.connect().then(db => {
      return db.collection(collection).deleteOne({ _id: ObjectId(id) })
    }).then(() => id)
  }
}

module.exports = MongoLib