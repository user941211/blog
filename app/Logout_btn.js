'use client'
import { signOut } from 'next-auth/react'
export default function LogoutBtn(){
    return(
        <button onClick={() => { alert('로그아웃되었습니다'),signOut() }} className='border border-black rounded-lg p-2'>로그아웃하기</button>
    )
}