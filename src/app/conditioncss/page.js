"use client"
import { useState } from 'react'
import condition from '../condition.module.css'

export default function Page() {
    const [color, setColor] = useState("red")
    //extract the class object for h4
    const { red } = condition
    return (
        <main>
            {/* class attribute  */}
            <h1 className={color == 'red' ? condition.red : condition.green}>Conditional css</h1>
            {/* style attribute  */}
            <h2 style={{ backgroundColor: color == 'red' ? 'red' : 'green' }}>Heading 2</h2>
            {/* id attribute  */}
            <h3 id={condition.orange}>Heading 3</h3>

            <h4 className={red}>Dummy text</h4>
            <h4 className={red}>Dummy text</h4>
            <h4 className={red}>Dummy text</h4>
            <h4 className={red}>Dummy text</h4>

            <button onClick={() => setColor('green')}>Update color</button>
        </main>
    )
}