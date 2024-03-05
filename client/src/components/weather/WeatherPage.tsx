import { WeatherResponse } from "../../types/WeatherResponse"
import ErrorComp from "../default/ErrorComp"
import LoadingComp from "../default/LoadingComp"
import WeatherLayout from "./inner/WeatherLayout"

type PropsType = {
    data: WeatherResponse | undefined,
    isLoading: boolean | undefined,
    error: boolean | undefined
}

function WeatherPage({data, isLoading, error}: PropsType) {
    return(
        <>
            {data && <WeatherLayout data={data} />}
            {isLoading && <LoadingComp />}
            {error && <ErrorComp />}
        </>
    )
}

export default WeatherPage