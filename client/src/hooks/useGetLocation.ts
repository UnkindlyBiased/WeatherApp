import { useEffect, useState } from "react"
import { LocationCoords } from "../types/LocationsCoords"

export default function useGetLocation() {
    const [location, setLocation] = useState<LocationCoords>()

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            })
        }
    }, [])

    return location;
}