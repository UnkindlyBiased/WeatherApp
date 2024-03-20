type PropsType = {
    children: React.ReactNode
    onClick?: () => void
}

function Button({children, onClick}: PropsType) {
    return(
        <button className="bg-default-blue px-4 py-2 rounded-xl" onClick={onClick}>
            <span className="font-bold text-white">{children}</span>
        </button>
    )
}

export default Button