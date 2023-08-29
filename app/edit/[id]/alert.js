'use client'
import Link from "next/link"
export default function alert(){
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-2xl font-bold text-center mb-4">
                로그인 하지 않았습니다. 로그인을 진행해주세요.
            </p>
            <Link href="/list" >
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">되돌아가기</button>
            </Link>
        </div>
    )
}