import { ObjectId } from "mongodb";
import {connectDB} from "/util/database"

export default async function Detail(props){
    let db = (await connectDB).db(`${process.env.DB_DB}`);
    let result = await db.collection(`${process.env.DB_LIST}`).findOne({_id : new
    ObjectId(props.params.id)})
    console.log(props.params.id)

    return(
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}