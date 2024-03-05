import { useParams } from "react-router-dom";
import { useGetWeatherByCity } from "../../hooks/useGetWeather";
import WeatherPage from "../../components/weather/WeatherPage";

export default function CityWeather() {
    const { city } = useParams()
    const { weatherData, isLoading, error } = useGetWeatherByCity(city!);

    return (
        <WeatherPage data={weatherData} isLoading={isLoading} error={error} />
    )
}