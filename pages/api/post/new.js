import { connectDB } from "@/util/database";

export default async function handler(req, res){
    const todayTime = () => {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth();
        let date = now.getDate();
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        let hours = now.getHours();
        let mintues = now.getMinutes();

        //return year+'.'+month+'.'+date+' ('+dayweek+')요일 '+hours+':'+mintues
        return year+'.'+month+'.'+date+' '+hours+':'+mintues
    }
    
    const document={
        ...req.body,
        date : todayTime(),
        views : 0
    }
    console.log(document)
    if(req.method =='POST'){
        try{
            console.log(req.body)
            if(req.body.title == ''){
                return res.status(500).json('제목 왜 안써.');
                //res.write("<script>alert('제목 왜 안써')</script>");
            }else if(req.body.content == ''){
                return res.status(500).json('내용 왜 안써')
            }
            try{
                let db = (await connectDB).db(`${process.env.DB_DB}`);
                let result = await db.collection(`${process.env.DB_LIST}`).insertOne(document)
                return res.status(200).redirect('/list')
            }catch(error){}
            
        }catch (error) {
            console.error('DB 삽입 오류:', error);
            res.status(500).json({ message: '데이터베이스 오류' });
        }
    }
}