import axios from "axios"

class WeatherService {
    private BASE_URL: string = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}`

    async getWeatherInfoByQuery(location: string) {
        const requestString = `${this.BASE_URL}&q=${location}`
        const weatherData = await axios.get(requestString)
        return weatherData.data
    }
    async getWeatherInfoByGeo() {
        
    }
}

export default new WeatherService()