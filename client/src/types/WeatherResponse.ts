import { Current } from "./Current"
import { Location } from "./Location"

export type WeatherResponse = {
    location: Location,
    current: Current
}