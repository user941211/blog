import { connectDB } from "@/util/database.js"

export default async function handler(req, res){

    console.log(123)
    if(req.method =='POST'){
        console.log(req.body)
        return res.status(200).json('처리완료')
    }
}
//서버기능 처리성공시에는 status(200)
//서버기능 처리성공시에는 status(500)
//서버기능 처리 실패시 (유저잘못) status(400)