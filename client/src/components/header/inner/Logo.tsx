import { Link } from 'react-router-dom'
import logo from '../../../assets/YourWeather.png'

export default function Logo() {
    return (
        <>
            <Link to='/'>
                <img className='w-[16em]' src={logo} />
            </Link>
        </>
    )
}