'use client'

import { useEffect, useState } from "react"

export default function Comment(props) {
    let [comment, setComment] = useState('')
    let [data, setData] = useState([])
    //console.log(props.id)
    //query string 사용
    useEffect(() => {//쓸데없는 코드 보관함??, ajax, 타이머등 넣음
        fetch('/api/comment/list?id=' + props.id)
        .then(r=>r.json())
        .then((result) => {
            setData(result)
        }) 
    },[data])
    //1회만 로드 목적으로 [] 추가함 없애도 속도, 자원 문제 제외하고는 없음
    //html 보여준 후에 useEffect가 실행된다!!!
    return (
        <div>
            <div className="mt-4">댓글 목록</div>
            {data.length > 0 ? (
                <div className="mt-2">
                    {data.map((a, i) => {
                        return (
                            <div key={i} className="bg-gray-100 p-4 rounded-md my-2">
                                <p className="text-gray-800 font-semibold">작성자: {a.name}</p>
                                <p className="text-gray-800">내용: {a.content}</p>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p className="mt-2 text-gray-500">댓글 없음...</p>
            )}

            <input
                className="border border-black rounded-lg m-2 p-2"
                onChange={(e) => { setComment(e.target.value) }} />
            <button
                className="border border-black rounded-lg m-2 p-2"
                onClick={() => {
                    fetch('/api/comment/new',
                        {
                            method: 'POST',
                            body: JSON.stringify({ comment: comment, _id: props.id })
                        })
                        .then((response) => {
                            if (response.status === 200) {
                                alert('댓글이 등록되었습니다.');
                                
                            } else {
                                throw new Error('서버 오류');
                            }
                        })

                }}>댓글 등록</button>
        </div>
    )
}