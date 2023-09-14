import Link from "next/link"
import './about.css'
export default function Layout({ children }) {
    return (
        <div>
            <ul className="login-menu">
                <li>
                    <h4>About Navbar</h4>
                </li>
                <li>
                    <Link href="/about">About main</Link>
                </li>
                <li>
                    <Link href="/about/aboutstudent">Student about </Link>
                </li>
                <li>
                    <Link href="/about/aboutcollege">college about</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}