import { Link } from 'react-router-dom'
import logo from '../../../assets/YourWeather.png'

export default function Logo() {
    return (
        <>
            <Link to='/' className='ml-4 w-1/6'>
                <img src={logo} />
            </Link>
        </>
    )
}