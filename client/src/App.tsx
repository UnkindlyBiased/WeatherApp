import './App.css'
import Header from './components/header/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TestComp from './components/stuff/Test'

function App() {
  const router = createBrowserRouter([{
    element: <Header />,
    children: [
      {
        path: '/',
        element: <TestComp />
      },
      {
        path: '/weather/:city',
        element: <TestComp />
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