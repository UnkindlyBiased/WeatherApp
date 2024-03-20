import { Link } from "react-router-dom"

type PropsType = {
    children: React.ReactNode
    link: string
}

function CustomNavLink({children, link}: PropsType) {
    return (
        <Link to={link}>
            <div className="px-4 py-2 bg-white hover:shadow-lg transition-all rounded-lg">
                <span className="font-bold text-default-blue text-lg">
                    {children}
                </span>
            </div>
        </Link>
    )
}

export default CustomNavLink