import axios from "axios"
import dotenv from 'dotenv'
import { LocationCoords } from "../../utils/types/DefaultTypes"

dotenv.config()

class WeatherService {
    private BASE_URL: string = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}`

    async getWeatherInfoByQuery(location: string) {
        const requestString = `${this.BASE_URL}&q=${location}`
        const weatherData = await axios.get(requestString)
        return weatherData.data
    }
    async getWeatherInfoByCoords(coords: LocationCoords) {
       const requestString = `${this.BASE_URL}&q=${coords.lat},${coords.lng}`
       const weatherData = await axios.get(requestString)
       return weatherData.data
    }
}

/*
    TODO: Breaking the DRY principle, as weather data by coordinates and by city's name can be accessed by the same query parameter
    TODO: Implement DTO for received data :-)
*/

export default new WeatherService()