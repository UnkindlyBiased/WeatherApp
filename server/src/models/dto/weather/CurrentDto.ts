import Condition from "../../weather/Condition"

export default interface CurrentDto {
    last_updated: string
    temp_c: number
    temp_f: number
    condition: Condition
    wind_mph: number
    wind_kph: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
}