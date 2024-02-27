import Current from "../../weather/Current";
import Location from "../../weather/Location";
import CurrentDto from "./CurrentDto";
import LocationDto from "./LocationDto";

export function mapLocationToLocationDto(location: Location): LocationDto {
    const dto: LocationDto = {
        name: location.name,
        region: location.region,
        country: location.country,
        lat: location.lat,
        lon: location.lon,
        localtime: location.localtime
    }
    return dto
}

export function mapCurrentToCurrentDto(current: Current): CurrentDto {
    const dto: CurrentDto = {
        last_updated: current.last_updated,
        temp_c: current.temp_c,
        temp_f: current.temp_f,
        condition: current.condition,
        wind_mph: current.wind_mph,
        wind_kph: current.wind_kph,
        humidity: current.humidity,
        cloud: current.cloud,
        feelslike_c: current.feelslike_c,
        feelslike_f: current.feelslike_f
    }
    return dto
}