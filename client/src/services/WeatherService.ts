import { api } from "../http"
import { LocationCoords } from "../types/LocationsCoords"
import { WeatherResponse } from "../types/WeatherResponse"

class WeatherService {
    async getWeatherByCity(city: string): Promise<WeatherResponse> {
        const weatherData = (await api.get(`/weather/${city}`)).data
        return weatherData
    }
    async getWeatherByCoords(coords: LocationCoords): Promise<WeatherResponse> {
        const weatherData = (await api.get(`/weather/coords?lat=${coords.lat}&lng=${coords.lng}`)).data
        return weatherData
    }
}

export default new WeatherService()