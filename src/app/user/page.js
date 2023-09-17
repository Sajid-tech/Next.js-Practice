"use client"

import { useState } from "react"

export default function Page() {
    const [h3Style, setH3Style] = useState({ backgroundColor: 'green' })
    return (
        <div>
            <h1>User Page</h1>
            <h2 style={{ color: "blue", backgroundColor: "aqua " }}>Inline css</h2>
            <h3 style={h3Style}>Heading 3 for user</h3>
            <button onClick={() => setH3Style({ backgroundColor: "red" })}>Update style</button>
        </div>
    )
}