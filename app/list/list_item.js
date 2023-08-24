'use client'
import Link from "next/link"

export default function ListItem({result}){

    //nextjs에서 useEffect에서는
    //서버에 부탁해서 DB게시물 가져오는 방식. 즉 get 방식등
    //단점 : 검색 노출이 어렵다. use client 학습방법으로는 괜찮지만
    //검색엔진 봇한테는 별로기에 props로 가져오자

    return(
        <div>
            <ul>
                <p className="text-4xl font-bold text-center mt-4">글 목록</p>
                {result.map((a, i) =>
                    <li key={i}>
                        <Link prefetch={false} href={'/detail/' + result[i]._id}>
                            <div className="bg-white rounded-lg  mb-2 shadow-md text-black">
                                <div className="bg-white rounded-lg p-5 mb-2 shadow-md text-black" key={i}>
                                    <h4 classNmae="text-2xl font-semibold mb-0">{result[i].title}</h4>
                                    <p className="text-gray-500 my-1">{result[i].content}</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}