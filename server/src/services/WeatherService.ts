import axios from "axios"

class WeatherService {
    async getWeatherInfoByQuery(location: string) {
        const requestString = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}`
        const weatherData = await axios.get(requestString)
        return weatherData.data
    }
}

export default new WeatherService()