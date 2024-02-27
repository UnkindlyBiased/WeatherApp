import Current from "./Current"

export default interface WeatherResponse {
    location: Location
    current: Current
}