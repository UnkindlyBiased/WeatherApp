import { Link } from "react-router-dom"

type PropsType = {
    children: React.ReactNode
    link: string,
}

function Button({children, link}: PropsType) {
    return(
        <Link to={link}>
            <button className="bg-default-blue px-4 py-2 rounded-xl hover:shadow-md transition-all">
                <span className="font-bold text-white">{children}</span>
            </button>
        </Link>
    )
}

export default Button