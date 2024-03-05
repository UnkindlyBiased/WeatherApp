type PropsType = {
    title?: string
    data: string | number
}

function WeatherPart({title, data}: PropsType) {
    return(
        <>
            <div className="p-1 text-xl">
                {title && <span className="font-medium pr-2">{title}:</span>}
                <span>{String(data)}</span>
            </div>
        </>
    )
}

export default WeatherPart