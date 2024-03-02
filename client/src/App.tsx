import './App.css'
import Header from './components/header/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TestComp from './components/stuff/Test'
import CityWeather from './pages/weather/CityWeather'
import CurrentWeather from './pages/weather/CurrentWeather'

function App() {
  const router = createBrowserRouter([{
    element: <Header />,
    children: [
      {
        path: '/',
        element: <TestComp />
      },
      {
          path: '/current',
          element: <CurrentWeather />
      },
      {
        path: '/weather/:city',
        element: <CityWeather />
      }
    ]
  }])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App