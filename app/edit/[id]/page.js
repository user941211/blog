import { connectDB } from "/util/database"
import { ObjectId } from "mongodb";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Alert from '/app/alert'
import NotSame from "@/app/NotSame";
// import { useState } from 'react';

export default async function edit(props) {
    let session = await getServerSession(authOptions)
    if (session == null) {
        return (
            <Alert />
        )
    } else {
        let db = (await connectDB).db(`${process.env.DB_DB}`);
        //let result = await db.collection(`${process.env.DB_LIST}`).find().toArray();
        let result = await db.collection(`${process.env.DB_LIST}`).findOne({
            _id: new ObjectId(props.params.id)
        })
        console.log(result.author)
        if(result.author==session.user.email){
            return (
                <div className="text-center m-5 w-1/2 p-5 mx-auto border border-collapse border-gray-300">
                    <h4>수정 페이지</h4>
                    <form action={process.env.DB_EDIT} method="POST">
                        <table className="mx-auto">
                            <tr>
                                <td className="px-6 py-3 text-center text-s font-medium uppercase tracking-wider w-[25%]">제목</td>
                                <td><input name="title" className="mx-auto box-border p-2 block" defaultValue={result.title} /></td>
                            </tr>
                            <tr>
                                <td className="px-6 py-3 text-center text-s font-medium uppercase tracking-wider w-[25%]">내용</td>
                                <td><input name="content" className="mx-auto box-border p-2 block" defaultValue={result.content} /></td>
                            </tr>
                            <input name="_id" className="mx-auto box-border p-2 block hidden" defaultValue={result._id.toString()} />
                        </table>
                        <button className="p-2 px-4 bg-gray-300 rounded-md" type="submit">수정하기</button>
                    </form>
                </div>
            )
        }else{
            return(
                <NotSame/>
            )
        }
        
    }

}