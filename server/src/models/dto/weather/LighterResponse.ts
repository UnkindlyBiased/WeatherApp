import CurrentDto from "./CurrentDto";
import LocationDto from "./LocationDto";

export default interface LighterResponse {
    location: LocationDto,
    current: CurrentDto
}