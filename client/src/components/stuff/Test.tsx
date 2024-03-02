import { useState } from "react"
import { Link } from "react-router-dom"

export default function TestComp() {
    const [text, setText] = useState<string>("")
    return(
        <>
            <div>
                <input value={text} onChange={e => (setText(e.target.value))} />
                <Link to={`/weather/${text}`}>
                    <button>Click me</button>
                </Link>
            </div>
            <div>Working with geolocation</div>
        </>
    )
}