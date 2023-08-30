import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res){
    const todayTime = () => {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth()+1;
        let date = now.getDate();
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        let hours = now.getHours();
        let mintues = now.getMinutes();

        //return year+'.'+month+'.'+date+' ('+dayweek+')요일 '+hours+':'+mintues
        return year+'.'+month+'.'+date+' '+hours+':'+mintues
    }

    let update_document={
        title : req.body.title,
        content : req.body.content,
        date : todayTime(),
    }

    if (req.method == 'POST') {
        //console.log(req.body)
        let db = (await connectDB).db(`${process.env.DB_DB}`);
        let result = await db.collection(`${process.env.DB_LIST}`).updateOne(
            { _id: new ObjectId(req.body._id) },
            { $set: update_document }
        )
        //return res.status(200).send({message : '수정 완료!', redirect : '/list'})
        res.redirect(302,'/list');
    }
}