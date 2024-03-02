import { useParams } from "react-router-dom"

export default function TestWithParams() {
    const { city } = useParams()
    return (
        <>{city}</>
    )
}