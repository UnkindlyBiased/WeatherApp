import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WeatherResponse } from "../../types/WeatherResponse";
import WeatherService from "../../services/WeatherService";
import WeatherPage from "../../components/weather/WeatherPage";

export default function CityWeather() {
    const { city } = useParams()

    const [weatherData, setWeatherData] = useState<WeatherResponse>()

    useEffect(() => {
        async function getData() {
            const response = await WeatherService.getWeatherByCity(String(city))
            setWeatherData(response)
        }
        getData()
    }, [city])

    return (
        <WeatherPage data={weatherData!} />
    )
}