import { useState } from "react";
import Button from "../../ui/DefaultButton";

export default function SearchInput() {
    const [text, setText] = useState("")

    return (
        <>
            <input className="px-1 h-8 w-60 rounded-lg border-2 border-neutral-500" onChange={e => setText(e.target.value)}/>
            <Button link={`/weather/${text}`}>
                Search
            </Button>
        </>
    )
}