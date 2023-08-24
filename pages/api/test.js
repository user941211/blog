import { connectDB } from "@/util/database.js"

export default async function handler(요청, 응답){
    const todayTime = () => {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth();
        let date = now.getDate();
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        let dayweek = week[now.getDay()];
        let hours = now.getHours();
        let mintues = now.getMinutes();
        let seconds = now.getSeconds();

        return year+'.'+month+'.'+date+' ('+dayweek+')요일 '+hours+':'+mintues+':'+seconds
    }
    

    console.log(123)
    if(요청.method =='POST'){
        return 응답.status(200).json('처리완료')
    }
    else if(요청.method =='GET'){
        let db = (await connectDB).db(`${process.env.DB_DB}`);
        let result = await db.collection(`${process.env.DB_LIST}`).find().toArray();
        return 응답.status(200).json(result)
    }
}
//서버기능 처리성공시에는 status(200)
//서버기능 처리성공시에는 status(500)
//서버기능 처리 실패시 (유저잘못) status(400)