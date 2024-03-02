import { WeatherResponse } from "../../types/WeatherResponse"

type PropsType = {
    data: WeatherResponse
}

export default function WeatherPage({data}: PropsType) {
    if (!data) {
        return (
            <h1>Is loading...</h1>
        )
    }
    return (
        <>
            <h1>{data.location.name}</h1>
            <div>Temperature: {data.current.temp_c}C</div>
        </>
    )
}