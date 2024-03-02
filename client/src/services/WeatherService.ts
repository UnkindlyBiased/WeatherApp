import { api } from "../http"
import { WeatherResponse } from "../types/WeatherResponse"

class WeatherService {
    async getWeatherByCity(city: string): Promise<WeatherResponse> {
        const weatherData = (await api.get(`/weather/${city}`)).data
        return weatherData
    }
}

export default new WeatherService()