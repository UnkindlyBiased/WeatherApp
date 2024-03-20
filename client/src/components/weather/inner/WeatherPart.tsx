type PropsType = {
    title?: string
    children: React.ReactNode
}

function WeatherPart({title, children}: PropsType) {
    return(
        <>
            <div className="p-1 text-xl">
                {title && <span className="font-semibold pr-2">{title}:</span>}
                <span>{children}</span>
            </div>
        </>
    )
}

export default WeatherPart