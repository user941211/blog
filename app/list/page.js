import { connectDB } from "@/util/database.js"
import Link from 'next/link'

export default async function List() {
    let db = (await connectDB).db(`${process.env.DB_DB}`);
    let result = await db.collection(`${process.env.DB_LIST}`).find().toArray();
    //promise의 return에서 return 해야하기 때문에 await을 사용한다.
    console.log(result[0]._id)

    return (
        <div>
            {result.map((a, i) =>
                <Link href={`/detail/${result[i]._id}`} className="no-underline">
                    <div className="list-bg">
                        <div className="list-item" key={i}>
                            <h4>{result[i].title}</h4>
                            <p>{result[i].content}</p>
                        </div>           
                    </div>
                </Link>
            )}
        </div>
    )
}