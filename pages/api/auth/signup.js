import { connectDB } from "@/util/database";
//import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let db = (await connectDB).db(`${process.env.DB_DB}`);
    let result = await db.collection(`${process.env.DB_USER}`).find({ email: req.body.email }).toArray();
    //console.log(result)
    if (result!=null) {
      res.status(405).json('중복된 이메일입니다. 다른걸로 하십쇼')
    } else {
      if (
        /^\w{4,12}$/.test(req.body.name) &&
        /^.{8,15}$/.test(req.body.password) &&
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(req.body.email)
      ) {
        const hash = await bcrypt.hash(req.body.password, 10);
        req.body.password = hash;

        let db = (await connectDB).db(`${process.env.DB_DB}`);
        await db.collection(`${process.env.DB_USER}`).insertOne(req.body);
        res.status(200).json('성공');
      } else {
        res.status(407).json('제대로 양식 확인하시길')
      }
    }
    //if(/^.{8,15}$/.test(req.body.password)){console.log(1)}else{console.log(2)}
  }
}; 