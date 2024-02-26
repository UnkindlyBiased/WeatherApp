import { FastifyInstance, FastifyReply } from "fastify";
import WeatherController from "../controllers/WeatherController";

export default async function WeatherRouter(fastify: FastifyInstance) {
    fastify.get('/:location', WeatherController.getWeatherInfoByQuery)
}