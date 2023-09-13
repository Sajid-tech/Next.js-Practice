'use client'
import { useRouter } from 'next/navigation'

import Link from "next/link";
const About = () => {
    let router = useRouter()
    return (

        <div>
            <h1>About page reloaded</h1>
            <Link href="/">Go to Homepage</Link>
            <br />
            <br />
            <button onClick={() => router.push("/")}>Go to Homepage</button>
        </div>

    )
}

export default About;