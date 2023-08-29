"use client"

import { usePathname, useRouter } from 'next/navigation';

export default function Deletebtn(props) {
  const pathname = usePathname();
  const router = useRouter();
  
  console.log(props)
  return (
    <button className="text-base m-2 p-5 border border-black rounded-xl" onClick={() => {
      fetch('/api/post/delete', {
        method: 'DELETE', body: props.id
      }).then((response) => {
        // console.log(response.status)
        if (response.status === 200) {
          // console.log('확인완료')
          alert('삭제 완료됨');
          router.push('/list')
        } else {
          alert('삭제 실패');
          router.reload();
        }
      })
        .catch((error) => {
          console.error('삭제 요청 실패:', error);
          alert('삭제 요청 실패');
        });

    }}>삭제하기</button>
  )
}