import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import axios from 'axios'
import { WeatherResponse } from './types/WeatherResponse'

function App() {
  const [weather, setWeather] = useState<WeatherResponse>()
  useEffect(() => {
    async function getData() {
      const weatherData = (await axios.get('http://localhost:5000/weather/Zhytomyr')).data
      setWeather(weatherData)
    }
    getData()
  })
  return (
    <>
      <Header />
      <div style={{
        marginTop: '10vh',
        display: 'flex',
        width: '500px',
        padding: '10px'
      }}>
        <h1>{weather?.current.temp_c} degrees</h1>
        <img src={weather?.current.condition.icon} alt={weather?.current.condition.text}/>
      </div>
    </>
  )
}

export default App
