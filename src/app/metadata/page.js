"use client"
import { useRouter } from "next/navigation"
export default function MetaData() {
    let router = useRouter()
    return (
        <div>

            <h1>Generate Meta Data</h1>
            <button onClick={() => router.push("/metadata/usermetadata")}> Go to User (meta data)</button>
        </div>
    )
} 