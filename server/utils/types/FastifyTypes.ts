import { FastifyRequest } from "fastify";
import { IWeatherParams } from "./Types";

export type IWeatherRequest = FastifyRequest<{
    Params: IWeatherParams
}>