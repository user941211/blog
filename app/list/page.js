import { connectDB } from "@/util/database.js"
import Link from 'next/link'
import ListItem from "./list_item";
//import DetailLink from "./DetailLink"

export const dynamic = 'force-dynamic'

export default async function List() {
    let db = (await connectDB).db(`${process.env.DB_DB}`);
    let result = await db.collection(`${process.env.DB_LIST}`).find().toArray();
    //promise의 return에서 return 해야하기 때문에 await을 사용한다.
    //console.log(result[0]._id)
    //console.log(result)
    //result[i].title.toString()도 생각하자
    //개발중일땐 prefetch 확인 여부 불가
    //<DetailLink/>
    return (
        <div classNmae="w-10/12 max-w-7xl mx-auto">
            <ListItem result={result} />
            <Link href='./write'><button className="text-base m-2 p-5 border border-black rounded-xl">글 쓰기</button></Link>
        </div>
    )
}