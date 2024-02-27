import { FastifyRequest } from "fastify";
import { IWeatherParams, LocationCoords } from "./DefaultTypes";

export type IWeatherRequest = FastifyRequest<{
    Params: IWeatherParams,
    Querystring: LocationCoords
}>