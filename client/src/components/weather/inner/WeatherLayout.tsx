import { WeatherResponse } from "../../../types/WeatherResponse"
import Title from "./Title"
import WeatherPart from "./WeatherPart"

type PropsType = {
    data: WeatherResponse
}

function WeatherLayout({data}: PropsType) {
    return (
        <div className="px-6 pt-3 space-y-2">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                    <Title>{data.location.name}</Title>
                    <img src={data.current.condition.icon} alt={data.current.condition.text}/>
                </div>
                <div>
                    <WeatherPart>{data.location.region}, {data.location.country}</WeatherPart>
                    <WeatherPart title="Last updated">{data.current.last_updated}</WeatherPart>
                </div>
            </div>
            <div className="italic text-2xl">
                <span>{data.current.condition.text}</span>
            </div>
            <div className="flex pt-2 space-x-6">
                <div className="flex flex-col justify-center p-2 pr-12 bg-default-blue rounded-2xl text-white w-min">
                    <WeatherPart title="Temperature">
                        {data.current.temp_c}C (feels like {data.current.feelslike_c}C)
                    </WeatherPart>
                    <WeatherPart title="Humidity">{data.current.humidity}%</WeatherPart>
                </div>
                <div className="flex flex-col justify-center p-2 pr-12 bg-default-blue rounded-2xl text-white w-fit">
                    <WeatherPart title="Cloud">{data.current.cloud}%</WeatherPart>
                    <WeatherPart title="Wind speed">{data.current.wind_kph} kph</WeatherPart>
                </div>
            </div>
        </div>
    )
}

export default WeatherLayout