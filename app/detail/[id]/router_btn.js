'use client'

export default function Deletebtn(props) {
  console.log(props)
  return (
    <button className="text-base m-2 p-5 border border-black rounded-xl" onClick={() => {
      fetch('/api/post/delete', {
        method: 'DELETE', body: props.id
      }).then((response) => {
        if (response.ok) {
          alert('삭제 완료됨');
          window.location.href = '/list';
        } else {
          alert('삭제 실패');
          window.location.reload();
        }
      })
        .catch((error) => {
          console.error('삭제 요청 실패:', error);
          alert('삭제 요청 실패');
        });

    }}>삭제하기</button>
  )
}