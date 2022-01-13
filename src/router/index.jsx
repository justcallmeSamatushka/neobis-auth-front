import { HomePage } from '../pages/HomePage';
import { Login } from '../pages/Login';
import { Registration } from '../pages/Registration';

export const privateRoutes = [
  {
    path: '/',
    element: <HomePage />
  }
]

export const publicRoutes = [
  {
    path: '/signin',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Registration />
  }
]