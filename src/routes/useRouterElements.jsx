
import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import { path } from './path'
import Login from '../modules/auth/Login/Login'
import Register from '../modules/auth/Register/Register'
import { useRoutes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout/MainLayout'
import HomePage from '../modules/home/HomePage/HomePage'
import MovieDetails from '../modules/home/MovieDetails/MovieDetails'
import UserManagement from '../modules/admin/UserManagement/UserManagement'
import MovieManagement from '../modules/admin/MovieManagement/MovieManagement'
import AdminLayout from '../layouts/AdminLayout/AdminLayout'
import AdminDashBord from '../modules/admin/AdminDashBord/AdminDashBord'

export default function useRouterElements() {
    const element = useRoutes([
        //auth
        {
            path: path.AUTH,
            element:<AuthLayout />,
            children:[
                {
                    path:path.LOGIN,
                    element:<Login />
                },
                {
                    path:path.REGISTER,
                    element:<Register />
                }
            ]
        },
        //home
        {
            path:path.HOME,
            element:<MainLayout />,
            children:[
                {
                   index:true,
                    element:<HomePage />
                },
                {
                    path:path.MOVIE_DETAILS,
                    element:<MovieDetails />
                }
            ]
        },
        //admin
        {
            path:path.ADMIN,
            element:<AdminLayout />,
            children:[
                {
                    index:true,
                    element:<AdminDashBord />
                },
                {
                    path:path.USER_MANAGEMENT,
                    element:<UserManagement />
                },
                {
                    path:path.MOVIE_MANAGEMENT,
                    element:<MovieManagement />
                }
            ]
        }   
    ])
    return element
}
