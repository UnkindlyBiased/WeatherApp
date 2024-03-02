import { WeatherResponse } from "../../types/WeatherResponse"
import styles from './WeatherPage.module.scss'

type PropsType = {
    data: WeatherResponse
}

export default function WeatherPage({data}: PropsType) {
    if (!data) {
        return (
            <div className={styles.loadingSurrounder}>
                <h1>Is loading...</h1>
            </div>
        )
    }
    return (
        <div className={styles.loadedSurrounder}>
            <div className={styles.title}>
                <h1>{data.location.name}</h1>
                <img src={data.current.condition.icon} alt={data.current.condition.text}/>
            </div>
            <span>Temperature: {data.current.temp_c} C</span>
        </div>
    )
}