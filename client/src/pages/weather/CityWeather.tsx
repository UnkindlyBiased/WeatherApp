import { useParams } from "react-router-dom";
import WeatherPage from "../../components/weather/WeatherPage";
import { useGetWeatherByCity } from "../../hooks/useGetWeather";

export default function CityWeather() {
    const { city } = useParams()
    const weatherData = useGetWeatherByCity(city!);

    return (
        <WeatherPage data={weatherData!} />
    )
}