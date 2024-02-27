import { FastifyReply } from "fastify";
import { IWeatherRequest } from "../../utils/types/FastifyTypes";
import WeatherService from "../services/WeatherService";

class WeatherController {
    async getWeatherInfoByQuery(req: IWeatherRequest, reply: FastifyReply) {
        const { location } = req.params
        if (location) {
            const data = await WeatherService.getWeatherInfoByQuery(location)
            reply.send(data)
        }
        reply.send({ error: "No city was given" })
    }
    async getWeatherInfoByCoords(req: IWeatherRequest, reply: FastifyReply) {
        const { lat, lng } = req.query
        const data = await WeatherService.getWeatherInfoByCoords({
            lat: Number(lat),
            lng: Number(lng)
        })
        reply.send(data)
    }
}

export default new WeatherController()