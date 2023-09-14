"use client"
import Link from "next/link"
import './login.css'
import { usePathname } from "next/navigation"

export default function Layout({ children }) {
    let pathname = usePathname()
    console.log(pathname)
    return (
        <div>

            {
                pathname != "/login/loginteacher" ?
                    <ul className="login-menu">

                        <li>
                            <h4>Login Navbar</h4>
                        </li>
                        <li>
                            <Link href="/login">Login main</Link>
                        </li>
                        <li>
                            <Link href="/login/loginstudent">Student login </Link>
                        </li>
                        <li>
                            <Link href="/login/loginteacher">Teacher login</Link>
                        </li>


                    </ul>
                    : <Link href="/login">Go to Main Login page</Link>
            }
            {children}
        </div>
    )
}