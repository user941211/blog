import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions)
    if (req.method == 'POST') {
        req.body = JSON.parse(req.body)
        let store  = {
            content : req.body.comment,
            parent : new ObjectId(req.body._id),
            author : session.user.email,
            name : session.user.name
        }
        let db = (await connectDB).db(`${process.env.DB_DB}`);
        let result = await db.collection(`${process.env.DB_COMMENT}`).insertOne(store);
        res.status(200).json('저장완료')
    }
} 