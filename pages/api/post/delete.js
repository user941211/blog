import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {
    let db = (await connectDB).db(`${process.env.DB_DB}`);
    let result = await db.collection(`${process.env.DB_LIST}`).find({ _id: new ObjectId(req.body) }).toArray();
    //console.log(result[0].author)

    let session = await getServerSession(req, res, authOptions)
    if (session != null) {
        if (result[0].author == session.user.email) {
            //console.log('진입성공')
            res.status(200).json({ message: "삭제 성공" })
            if (req.method == 'DELETE') {
                try {
                    try {
                        // console.log(result)
                        let result1 = await db.collection(`${process.env.DB_LIST}`).deleteOne({ _id: new ObjectId(req.body) })
                        return res.redirect(302, '/list')
                    } catch (error) { }
                } catch (error) {
                    console.error('DB 삽입 오류:', error);
                    res.status(500).json({ message: '데이터베이스 오류' });
                }
            }
        } else {
            res.status(401).json({ message: "작성자 본인만 삭제할 수 있습니다." })
        }

    } else {
        res.status(402).json({ message: "로그인부터 하세요.." })
    }

}