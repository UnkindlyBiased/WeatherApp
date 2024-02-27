import { FastifyRequest } from "fastify";
import { IWeatherParams, LocationCoords } from "./DefaultTypes";

export type WeatherRequest = FastifyRequest<{
    Params: IWeatherParams,
    Querystring: LocationCoords
}>