'use client'
import { signIn } from 'next-auth/react';

export default function MainpageLoginBtn() {
  return (
    <button 
    className="m-1 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
    onClick={() => signIn() }>소셜 로그인하기</button>
  )
}
