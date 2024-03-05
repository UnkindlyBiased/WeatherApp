import { useEffect, useState } from "react";
import { WeatherResponse } from "../types/WeatherResponse";
import WeatherService from "../services/WeatherService";
import useGetLocation from "./useGetLocation";

function useGetWeatherByCity(city: string) {
    const [weatherData, setWeatherData] = useState<WeatherResponse>()
    const [isLoading, setIsLoading] = useState<boolean>()
    const [error, setError] = useState<boolean>()

    useEffect(() => {
        async function getData() {
            try {
                setError(false)
                setIsLoading(true)
                setWeatherData(undefined)
                const response = await WeatherService.getWeatherByCity(String(city))
                setWeatherData(response)
            } catch(e) {
                console.log('Error')
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [city])

    return { weatherData, isLoading, error };
}


function useGetWeatherByCoords() {
    const [weatherData, setWeatherData] = useState<WeatherResponse>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const location = useGetLocation()

    useEffect(()=> {
        async function getData() {
            try {
                const response = await WeatherService.getWeatherByCoords(location!)
            setWeatherData(response)
            } catch(e) {
                console.log(e)
                setError(true)

            } finally {
                setIsLoading(false)
            }
        }
        if (location) {
            getData()
        }
    }, [location])

    return { weatherData, isLoading, error };
}

export {
    useGetWeatherByCity,
    useGetWeatherByCoords
}