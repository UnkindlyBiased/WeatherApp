import { Link } from "react-router-dom"

type PropsType = {
    text: string
    link: string,
}

export default function Button({text, link}: PropsType) {
    return(
        <Link to={link}>
            <button className="bg-default-blue px-4 py-2 rounded-xl hover:shadow-md transition-all">
                <span className="font-bold text-white">{text}</span>
            </button>
        </Link>
    )
}