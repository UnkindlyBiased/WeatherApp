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
                    <WeatherPart data={data.location.region} />
                    <WeatherPart title="Last updated" data={data.current.last_updated} />
                </div>
            </div>
            <div className="flex flex-col p-2 pr-12 bg-default-blue rounded-2xl text-white w-min">
                <WeatherPart title="Temperature" data={data.current.temp_c} />
                <WeatherPart title="Humidity" data={data.current.humidity + "%"} />
            </div>
        </div>
    )
}

export default WeatherLayout