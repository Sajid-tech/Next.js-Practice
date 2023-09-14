'use client'
import { useRouter } from 'next/navigation'

import Link from "next/link";
const About = () => {
    let router = useRouter()
    return (

        <div>
            <h1 className='heading'>About page reloaded</h1>
            <Link href="/">Go to Homepage</Link>
            <br />
            <br />
            <button onClick={() => router.push("/")}>Go to Homepage</button>
            <br />
            <br />
            <Link href="/about/aboutcollege">Go to About College Page</Link>
            <br /><br />
            <Link href="/about/aboutstudent">Go to About Student Page</Link>
        </div>

    )
}

export default About;