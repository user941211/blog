'use client'

import { useParams, usePathname, useRouter } from "next/navigation"

export default function DetailLink(){
    let router = useRouter()
    return(
        <button onclick={() => {router.prefetch('/detail/dsds')}}>버튼</button>
    )
}
