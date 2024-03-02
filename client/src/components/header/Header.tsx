import styles from './Header.module.scss'
import logo from '../../assets/YourWeather.png'
import { Link, Outlet } from 'react-router-dom'

export default function Header() {
    return(
        <>
            <header>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <Link to='/'>
                            <img src={logo} className={styles.logo} />
                        </Link>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}
