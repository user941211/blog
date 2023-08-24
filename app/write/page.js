//글 작성 페이지

export default function write(){
    // <input name="title">글 제목</input>
    // <input name="content">글 내용</input>
    // return(<input name="title" className="mx-auto box-border p-2 block mb-2" placeholder="글제목" />
    // <input name="content" className="mx-auto box-border p-2 block mb-2" placeholder="글내용" />
    return(
        <div className="text-center m-5 w-1/2 p-5 mx-auto border border-collapse border-gray-300">
            <form action={process.env.DB_WRTIE} method="POST">
                <table className="mx-auto">
                    <tr>
                        <td className="px-6 py-3 text-center text-s font-medium uppercase tracking-wider w-[25%]">제목</td>
                        <td><input name="title" className="mx-auto box-border p-2 block" placeholder="글제목" /></td>
                    </tr>
                    <tr>
                        <td className="px-6 py-3 text-center text-s font-medium uppercase tracking-wider w-[25%]">내용</td>
                        <td><input name="content" className="mx-auto box-border p-2 block" placeholder="내용" /></td>
                    </tr>
                </table>
                <button className="p-2 px-4 bg-gray-300 rounded-md" type="submit">전송</button>
            </form>
        </div>
    )
}