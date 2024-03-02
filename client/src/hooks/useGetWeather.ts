import { useEffect, useState } from "react";
import { WeatherResponse } from "../types/WeatherResponse";
import WeatherService from "../services/WeatherService";
import useGetLocation from "./useGetLocation";

function useGetWeatherByCity(city: string) {
    const [weatherData, setWeatherData] = useState<WeatherResponse>()

    useEffect(() => {
        async function getData() {
            const response = await WeatherService.getWeatherByCity(String(city))
            setWeatherData(response)
        }
        getData()
    }, [city])

    return weatherData;
}

function useGetWeatherByCoords() {
    const [weatherData, setWeatherData] = useState<WeatherResponse>()
    const location = useGetLocation()

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

    return weatherData;
}

export {
    useGetWeatherByCity,
    useGetWeatherByCoords
}