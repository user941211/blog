import { connectDB } from "@/util/database.js";
import Link from 'next/link';
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import MainpageLoginBtn from './MainpageLoginBtn'
import MainpageLogoutBtn from './MainpageLogoutBtn'
require("dotenv").config();

export default async function Home() {

  const clinet = await connectDB;
  const db = clinet.db(`${process.env.DB_DB}`)
  //const db = (await connectDB).db(`${process.env.DB_DB}`)로 축약 가능
  let session = await getServerSession(authOptions)
  let result = await db.collection('post').find().toArray()
  //collection의 모든 document를 꺼내려면 이걸 사용
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
          {
            session? <MainpageLogoutBtn/>:<MainpageLoginBtn/>
          }
          <h1 className="text-3xl font-bold text-center text-gray-700">소셜 로그인</h1>
          
           <form className="mt-6 mx-auto">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800">아이디</label>
              <input type="user_id" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">비밀번호</label>
              <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
            <Link href="/forget" className="text-xs text-blue-600 hover:underline">비번 분실?</Link>
            <div className="mt-2">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">로그인하기!</button>
            </div>
          </form> 

          <p className="mt-4 text-sm text-center text-gray-700 mx-2">
            계정이 없으면{" "}
            <Link href="/register" className="font-medium text-blue-600 hover:underline">회원가입</Link>
          </p>
          <p className="mt-4 text-sm text-center text-gray-700 mx-2">실험용 id 비번은 abcd, 1234로 적으시면 됩니다~</p>
        </div>
      </div>
  )
}
