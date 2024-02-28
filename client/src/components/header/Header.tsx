import styles from './Header.module.scss'
import logo from '../../assets/YourWeather.png'

export default function Header() {
    return(
        <>
            <header>
                <div>
                    <div className={styles.title}>
                        <img src={logo}/>
                    </div>
                </div>
            </header>
        </>
    )
}
