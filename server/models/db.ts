import { Db, MongoClient, ObjectId, ObjectID } from 'mongodb'
import { dbName } from './config'

// Replace the following with values for your environment.
const username = encodeURIComponent('dongdong')
const password = encodeURIComponent('9264')
const clusterUrl = 'localhost:27017'

const authMechanism = 'DEFAULT'

// Replace the following with your MongoDB deployment's connection string.
const uri = `mongodb://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}&useUnifiedTopology=${true}`

class DB {
  dbClient: Db
  static instance: DB

  static getInstance() {
    if (!DB.instance) {
      DB.instance = new DB()
    }
    return DB
  }

  constructor() {
    this.dbClient = null
    this.connect().catch(console.dir)
  }

  connect(): Promise<Db> {
    return new Promise((resolve, reject) => {
      if (!this.dbClient) {
        const client = new MongoClient(uri)
        client.connect((err) => {
          if (err) {
            reject(err)
          } else {
            this.dbClient = client.db(dbName)
            resolve(this.dbClient)
          }
        })
      } else {
        resolve(this.dbClient)
      }
    })
  }

  find(collectionName: string) {
    // 查询
    return new Promise((resolve, reject) => {
      this.connect().then((res: Db) => {
        const result = res.collection(collectionName).find({})
        result.toArray((err, docs) => {
          if (err) {
            reject(err)
            return
          }
          resolve(docs)
        })
      })
    })
  }

  update<T, U>(collectionName: string, json: T, json2: U) {
    return new Promise((resolve, reject) => {
      this.connect().then((res: Db) => {
        res.collection(collectionName).updateOne(
          json,
          {
            $set: json2
          },
          (err, result) => {
            if (err) {
              reject(err)
              return
            }
            resolve(result)
          }
        )
      })
    })
  }

  insert<T>(collectionName: string, json: T) {
    return new Promise((resolve, reject) => {
      this.connect().then((res: Db) => {
        res.collection(collectionName).insertOne(json, (err, result) => {
          if (err) {
            reject(err)
            return
          }
          resolve(result)
        })
      })
    })
  }

  remove<T>(collectionName: string, json: T) {
    return new Promise((resolve, reject) => {
      this.connect().then((res: Db) => {
        res.collection(collectionName).deleteOne(json, (err, result) => {
          if (err) {
            reject(err)
            return
          }
          resolve(result)
        })
      })
    })
  }

  getObjectId(id: string | number | ObjectId) {
    return new ObjectID(id)
  }

  count<T>(collectionName: string, json: T) {
    // 查询数量
    return new Promise((resolve) => {
      this.connect().then((res: Db) => {
        const result = res.collection(collectionName).countDocuments(json)
        result.then((count) => {
          resolve(count)
        })
      })
    })
  }
}

export = DB.getInstance()
