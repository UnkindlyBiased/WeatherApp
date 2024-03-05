import ErrorComp from "../../components/default/ErrorComp";
import LoadingComp from "../../components/default/LoadingComp";
import WeatherLayout from "../../components/weather/inner/WeatherLayout";
import { useGetWeatherByCoords } from "../../hooks/useGetWeather";

export default function CurrentWeather() {
    const { weatherData, isLoading, error } = useGetWeatherByCoords()

    return(
        <>
            {isLoading && <LoadingComp />}
            {error && <ErrorComp />}
            {weatherData && <WeatherLayout data={weatherData} />}
        </>
    )
}