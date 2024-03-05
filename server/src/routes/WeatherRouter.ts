import { FastifyInstance } from "fastify";
import WeatherController from "../controllers/WeatherController";

async function WeatherRouter(fastify: FastifyInstance) {
    fastify.get('/:location', WeatherController.getWeatherInfoByQuery)
    fastify.get('/coords', WeatherController.getWeatherInfoByCoords)
}

export default WeatherRouter