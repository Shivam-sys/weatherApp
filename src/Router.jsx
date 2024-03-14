import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import WeatherDetail from './pages/WeatherDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/weather',
    element: <WeatherDetail />,
  },
])

const Router = () => <RouterProvider router={router} />

export default Router
