import { useEffect, useState } from "react";
import { WeatherResponse } from "../../types/WeatherResponse";
import WeatherService from "../../services/WeatherService";
import WeatherPage from "../../components/weather/WeatherPage";
import { LocationCoords } from "../../types/LocationsCoords";

export default function CurrentWeather() {
    const [weatherData, setWeatherData] = useState<WeatherResponse>()
    const [location, setLocation] = useState<LocationCoords>()

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            })
        }
    }, [])

    useEffect(()=> {
        async function getData() {
            const response = await WeatherService.getWeatherByCoords(location!)
            console.log(response)
            setWeatherData(response)
        }
        if (location) {
            getData()
        }
    }, [location])

    return(
        <WeatherPage data={weatherData!} />
    )
}