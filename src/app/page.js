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
      <h1> Script componets in next.js| Make new page</h1>
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
      <br /> <br />
      <button onClick={() => navigate("/study")}>Study (for all catch segment)</button>
      <br /> <br />
      <button onClick={() => navigate("/productlist")}>Go to product list(client componets)</button>
      <br /> <br />
      <button onClick={() => navigate("/productserver")}>Go to product list (server componets)</button>
      <br /> <br />
      <button onClick={() => navigate("/user")}>User  (style with css)</button>
      <br /> <br />
      <button onClick={() => navigate("/modularcss")}>Modular css  (style with css)</button>
      <br /> <br />
      <button onClick={() => navigate("/conditioncss")}>conditional css  (style with css)</button>
      <br />
      <button onClick={() => navigate("/imageoptimization")}>Image Optimization</button>
      <br /> <br />
      <button onClick={() => navigate("/metadata")}>Genrate metadata</button>



    </main>



  )
}


