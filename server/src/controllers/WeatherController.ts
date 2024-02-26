import { FastifyReply, FastifyRequest } from "fastify";
import { IWeatherRequest } from "../../utils/types/FastifyTypes";
import WeatherService from "../services/WeatherService";

class WeatherController {
    async getWeatherInfoByQuery(req: IWeatherRequest, reply: FastifyReply) {
        const { location } = req.params
        const data = await WeatherService.getWeatherInfoByQuery(location)
        reply.send(data)
    }
    async getWeatherInfoByLocation(req: FastifyRequest, reply: FastifyReply) {
        const data = await WeatherService.getWeatherInfoByGeo()
        reply.send(data)
    }
}

export default new WeatherController()