import React from 'react';

export default async function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-6">회원 가입</h1>
        <form method="POST" action="/api/auth/signup">
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="name">이름</label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              type="text"
              name="name"
              id="name"
              placeholder=" 영어+숫자 4-12자리 선택해서 작성"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">이메일</label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              type="text"
              name="email"
              id="email"
              placeholder="이메일 양식에 맞춰서 작성할 것"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="password">비밀번호</label>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              type="password"
              name="password"
              id="password"
              placeholder="아무거나 8-15자리 입력"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="submit"
          >
            회원 가입
          </button>
        </form>
      </div>
    </div>
  );
}