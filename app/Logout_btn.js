'use client'
import { signOut } from 'next-auth/react'
export default function LogoutBtn(){
    return(
        <button onClick={() => { alert('로그아웃되었습니다'),signOut() }}>로그아웃!</button>
    )
}