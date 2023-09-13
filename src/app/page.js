'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const apple = () => {
    // alert("Hellp")
    setName("Sajid")
    //  name = "Majid" // it will not re rendered in terms of varibale

  }

  const InnerComp = () => {
    return (
      <h1>Inner Component</h1>
    )
  }

  const [name, setName] = useState('Majid')
  // let name = "Rajesh"
  return (
    <main className={styles.main}>
      <h1>Events, fucntion & state {name}</h1>
      <button onClick={apple}>Click me</button>
      <InnerComp />
      {/* or we can write as too */}
      {/* {InnerComp()} */}
    </main>

  )
}

