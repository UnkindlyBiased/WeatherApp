import WeatherPage from "../../components/weather/WeatherPage";
import { useGetWeatherByCoords } from "../../hooks/useGetWeather";

export default function CurrentWeather() {
    const weatherData = useGetWeatherByCoords()

    return(
        <WeatherPage data={weatherData!} />
    )
}