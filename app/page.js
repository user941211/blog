//import { connectDB } from "@/util/database.js";
import Link from 'next/link';
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import MainpageLoginBtn from './MainpageLoginBtn'
import MainpageLogoutBtn from './MainpageLogoutBtn'

require("dotenv").config();

export default async function Home() {
  
  // const clinet = await connectDB;
  // const db = clinet.db(`${process.env.DB_DB}`)
  //const db = (await connectDB).db(`${process.env.DB_DB}`)로 축약 가능
  let session = await getServerSession(authOptions)
  //let result = await db.collection(`${process.env.DB_LIST}`).find().toArray()
  //collection의 모든 document를 꺼내려면 이걸 사용
  
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">로그인/로그아웃 화면</h1>
        {session ? <MainpageLogoutBtn /> : <MainpageLoginBtn />}
        <p className="mt-4 text-sm text-center text-gray-700 mx-2">
          계정이 없으면{" "}
          <Link href="/register" className="font-medium text-blue-600 hover:underline">회원가입</Link>
        </p>
        <p className="mt-4 text-sm text-center text-gray-700 mx-2">실험용 email 비번은 abcd, 1234로 적으시면 됩니다~</p>
      </div>
    </div>
  )
}
