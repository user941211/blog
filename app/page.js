import { connectDB } from "@/util/database.js";

require("dotenv").config();

export default async function Home() {

  const clinet = await connectDB;
  const db = clinet.db(`${process.env.DB_DB}`)
  //const db = (await connectDB).db(`${process.env.DB_DB}`)로 축약 가능

  let result = await db.collection('post').find().toArray()
  //collection의 모든 document를 꺼내려면 이걸 사용
  console.log(result)

  return (
    <div>
      ㅁ
    </div>
  )
}
