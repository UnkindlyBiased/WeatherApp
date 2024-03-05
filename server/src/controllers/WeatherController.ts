import { FastifyReply } from "fastify";
import { WeatherRequest } from "../../utils/types/FastifyTypes";
import WeatherService from "../services/WeatherService";
import ApiError from "../../utils/ApiError";

class WeatherController {
    async getWeatherInfoByQuery(req: WeatherRequest, reply: FastifyReply): Promise<void> {
        try {
            const { location } = req.params
            if (location) {
                const data = await WeatherService.getWeatherInfoByQuery(location)
                reply.send(data)
            }
            throw ApiError.NotFoundError("Location was not given")
        } catch (e) {
            reply.send(e)
        }
    }
    async getWeatherInfoByCoords(req: WeatherRequest, reply: FastifyReply): Promise<void> {
        try {
            const { lat, lng } = req.query
            if (lat && lng) {
                const data = await WeatherService.getWeatherInfoByCoords({
                    lat: Number(lat),
                    lng: Number(lng)
                })
                reply.send(data)
            }
            throw ApiError.BadRequestError("One or more arguments were not given")
        } catch (e) {
            reply.send(e)
        }
    }
}

export default new WeatherController()