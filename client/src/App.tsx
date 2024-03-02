import Header from './components/header/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CityWeather from './pages/weather/CityWeather'
import CurrentWeather from './pages/weather/CurrentWeather'
import MainPage from './pages/main/MainPage'

function App() {
  const router = createBrowserRouter([{
    element: <Header />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
          path: '/current',
          element: <CurrentWeather />
      },
      {
        path: '/weather/:city',
        element: <CityWeather />
      },
      {
        path: '/about'
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