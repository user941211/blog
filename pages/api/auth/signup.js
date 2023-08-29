import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if(/^.{8,15}$/.test(req.body.password)){console.log(1)}else{console.log(2)}
    if(
      /^\w{4,12}$/.test(req.body.name) && 
      /^.{8,15}$/.test(req.body.password) &&
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(req.body.email)
    ){
      const hash = await bcrypt.hash(req.body.password, 10);
      req.body.password = hash;

      let db = (await connectDB).db('forum');
      await db.collection(`${process.env.DB_USER}`).insertOne(req.body);
      res.status(200).json('성공');
    }else{
      res.status(500).json('제대로 양식 확인하시길')
    }
    
  }
}; 