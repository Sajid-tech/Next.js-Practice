'use client'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
  let router = useRouter()
  const navigate = (name) => {
    router.push(name)
  }
  return (
    <main className={styles.main}>
      <h1> Dynamic Routing | Make new page</h1>
      <Link href="/login">Go to Login page</Link>
      <br />
      <br />
      <Link href="/about">Go to About page</Link>
      <br />
      <br />
      <button onClick={() => navigate("/login")}>Go to Login page</button>
      <br />
      <button onClick={() => navigate("/about")}>Go to About page</button>
      <br /> <br />
      <button onClick={() => navigate("/studentlist")}>Student List(for dynamic routing)</button>

    </main>

  )
}

