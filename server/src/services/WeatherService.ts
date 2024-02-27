import axios from "axios"
import dotenv from 'dotenv'
import { LocationCoords } from "../../utils/types/DefaultTypes"
import WeatherResponse from "../models/weather/WeatherResponse"

dotenv.config()

class WeatherService {
    private BASE_CURRENT_URL: string = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}`

    async getWeatherInfoByQuery(location: string): Promise<WeatherResponse> {
        const requestString = `${this.BASE_CURRENT_URL}&q=${location}`
        const weatherData = this.getData(requestString)
        return weatherData
    }
    async getWeatherInfoByCoords(coords: LocationCoords): Promise<WeatherResponse> {
       const requestString = `${this.BASE_CURRENT_URL}&q=${coords.lat},${coords.lng}`
       const weatherData = this.getData(requestString)
       return weatherData
    }

    private async getData(link: string) {
        const weatherData = await axios.get<WeatherResponse>(link)
        return weatherData.data
    }
}

/*
    TODO: Breaking the DRY principle, as weather data by coordinates and by city's name can be accessed by the same query parameter
    TODO: Implement DTO for received data :-)
*/

export default new WeatherService()