import { useState } from "react";
import Button from "../../ui/DefaultButton";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
    const [text, setText] = useState("")
    const navigate = useNavigate()

    return (
        <>
            <input className="px-1 h-8 w-60 rounded-lg border-2 border-neutral-500" value={text}
                onChange={e => setText(e.target.value)} placeholder="Enter your location..."/>
            <Button onClick={() => { 
                navigate(`/weather/${text}`)
                setText("")
             }}>
                Search
            </Button>
        </>
    )
}