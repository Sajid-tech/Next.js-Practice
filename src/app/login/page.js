"use client"
// export default function Login() {
//     return (
//         <div>Login page</div>

import Link from "next/link";
import { useRouter } from "next/navigation";


//     )
// }

// or 

const Login = () => {
    let router = useRouter()

    const navigation = (page) => {
        router.push("/login" + page)
    }
    return (
        <div>
            <h1>Login page</h1>
            <Link href="/">Go to Homepage</Link>
            <br /> <br />
            <button onClick={() => navigation("/loginstudent")}>Go to login student page</button>
            <br /> <br />
            <button onClick={() => navigation("/loginteacher")}>Go to login teacher page</button>
        </div>
    )
}

export default Login;