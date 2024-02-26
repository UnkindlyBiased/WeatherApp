import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [location, setLocation] = useState(0)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
        setLocation(position.coords.latitude)
      }
    })
  }, [location])

  return (
    <>
      <h1>{location}</h1>
    </>
  )
}

export default App
