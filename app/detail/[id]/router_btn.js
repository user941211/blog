'use client'

import {useRouter} from 'next/navigation'
import Link from 'next/link'

export default function router_btn(){
  let router = useRouter()
  return (
    <>
    <button onClick={()=>{ router.back() }}>버튼</button>
    <Link href='./list'><button className="text-base m-2 p-5 border border-black rounded-xl">목록으로 돌아가기</button></Link>
    </>
  )
}