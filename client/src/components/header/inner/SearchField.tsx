import { useState } from "react";
import Button from "../../default/DefaultButton";

export default function SearchInput() {
    const [text, setText] = useState("")
    const handleText = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <input className="px-1 h-8 w-60 rounded-lg" onChange={handleText}/>
            <Button text="Search" link={`/weather/${text}`}/>
        </>
    )
}