'use client'
import Link from "next/link"
export default function NotSame(){
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-2xl font-bold text-center mb-4">
                본인이 작성한 글만 수정이 가능합나다.
            </p>
            <Link href="/list" >
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">목록으로 되돌아가기</button>
            </Link>
        </div>
    )
}