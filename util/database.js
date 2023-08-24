import { MongoClient } from 'mongodb'
const url = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASS}@${process.env.DB_EMAIL}.vludhli.mongodb.net`
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }
//개발 단계에서는 글로벌 변수를 만들어 놓고, 재사용한다.,