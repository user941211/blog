import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res){

    console.log(req.body)
    if(req.method =='DELETE'){
        try{
            try{
                let db = (await connectDB).db(`${process.env.DB_DB}`);
                let result = await db.collection(`${process.env.DB_LIST}`).deleteOne({_id : new ObjectId(req.body)})
                console.log(result)
                return res.redirect(302,'/list')
            }catch(error){}
        }catch (error) {
            console.error('DB 삽입 오류:', error);
            res.status(500).json({ message: '데이터베이스 오류' });
        }
    }
}