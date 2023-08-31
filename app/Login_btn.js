'use client'
import { signIn } from 'next-auth/react';

export default function LoginBtn() {
  return (
    <button onClick={() => signIn() } className='border border-black rounded-lg p-2'>소셜 로그인</button>
  )
}




