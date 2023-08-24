import { connectDB } from "@/util/database.js"
import Link from 'next/link'
//import DetailLink from "./DetailLink"

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
        <ul>
            <p className="text-4xl font-bold text-center mt-4">글 목록</p>
            {result.map((a, i) =>
            <li key={i}>
                <Link prefetch={false} href={'/detail/' + result[i]._id}>
                    <div className="bg-white rounded-lg  mb-2 shadow-md text-black">
                        <div className="bg-white rounded-lg p-5 mb-2 shadow-md text-black" key={i}>
                            <h4 classNmae="text-2xl font-semibold mb-0">{result[i].title}</h4>
                            <p className="text-gray-500 my-1">{result[i].content}</p>
                        </div>        
                    </div>
                </Link>
            </li>
            )}
            <Link href='./write'><button className="text-base m-2 p-5 border border-black rounded-xl">글 쓰기</button></Link>
        </ul>
        </div>
    )
}