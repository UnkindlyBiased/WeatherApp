import Current from "./Current"
import Location from "./Location"

export default interface WeatherResponse {
    location: Location
    current: Current
}