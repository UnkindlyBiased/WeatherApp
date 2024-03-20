import axios from "axios"
import dotenv from 'dotenv'
import { LocationCoords } from "../../utils/types/DefaultTypes"
import WeatherResponse from "../models/weather/WeatherResponse"
import LighterResponse from "../models/dto/weather/LighterResponse"
import { mapCurrentToCurrentDto, mapLocationToLocationDto } from "../models/dto/weather/Mappers"

dotenv.config()

class WeatherService {
    private BASE_CURRENT_URL: string = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}`

    async getWeatherInfoByQuery(location: string): Promise<LighterResponse> {
        const requestString = `${this.BASE_CURRENT_URL}&q=${location}`
        const weatherData = this.getData(requestString)
        return {
            location: mapLocationToLocationDto((await weatherData).location),
            current: mapCurrentToCurrentDto((await weatherData).current)
        }
    }
    async getWeatherInfoByCoords(coords: LocationCoords): Promise<LighterResponse> {
        const requestString = `${this.BASE_CURRENT_URL}&q=${coords.lat},${coords.lng}`
        const weatherData = this.getData(requestString)
        return {
            location: mapLocationToLocationDto((await weatherData).location),
            current: mapCurrentToCurrentDto((await weatherData).current)
        }
    }

    private async getData(link: string): Promise<WeatherResponse> {
        const weatherData = await axios.get<WeatherResponse>(link)
        console.log(weatherData.data)
        return weatherData.data
    }
}

export default new WeatherService()