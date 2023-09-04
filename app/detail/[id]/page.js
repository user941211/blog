import { ObjectId } from "mongodb";
import { connectDB } from "/util/database"
import Link from 'next/link'
import Deletebtn from "./router_btn";
import Comment from "./comment"

export default async function Detail(props) {
    let db = (await connectDB).db(`${process.env.DB_DB}`);
    let result = await db.collection(`${process.env.DB_LIST}`).findOne({
        _id: new ObjectId(props.params.id)
    })
    
    return (
        <div className="bg-white p-6 w-4/5 mx-auto">
            <table className="w-full border border-collapse border-gray-300">
                <tbody>
                    <tr className="border-b border-gray-300">
                        <td className="px-6 py-3 text-center text-s font-medium text-gray-500 uppercase tracking-wider w-[25%]">글제목</td>
                        <td className="px-6 py-3 border border-gray-300 whitespace-nowrap">{result.title}</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                        <td className="px-6 py-3 text-center text-s font-medium text-gray-500 uppercase tracking-wider w-[25%]">작성자</td>
                        <td className="px-6 py-3 border border-gray-300 whitespace-nowrap">{result.author}</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                        <td className="px-6 py-3 text-center text-s font-medium text-gray-500 uppercase tracking-wider w-[25%]">작성일</td>
                        <td className="px-6 py-3 border border-gray-300 whitespace-nowrap">{result.date}</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-3 text-center text-s font-medium text-gray-500 uppercase tracking-wider w-[25%]">내용</td>
                        <td className="px-6 py-3 border border-gray-300 w-[75%]">{result.content}</td>
                    </tr>
                </tbody>
            </table>
            <Comment id={ result._id.toString() }/>
            <div className="w-full mx-auto">
                <Link href={`/edit/${result._id}`}><button className="text-base m-2 p-5 border border-black rounded-xl">수정하기</button></Link>
                <Deletebtn id={props.params.id}/>
                <Link href='/list'><button className="text-base m-2 p-5 border border-black rounded-xl">목록으로 돌아가기</button></Link>
            </div>
            
        </div>
    )
}
                        