import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
    
    const db = (await connectDB).db(`${process.env.DB_DB}`)
    let result = await db.collection(`${process.env.DB_COMMENT}`)
    .find({ parent : new ObjectId(req.query.id) }).toArray()
    res.status(200).json(result)
  }
