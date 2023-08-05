import React from "react";
import RouteCondition from "./helpers/routeCondition";

const Signin = React.lazy(() => import('../views/Signin'))
const Signup = React.lazy(() => import('../views/Signup'))
const Signout = React.lazy(() => import('../views/Signout'))
const Dashboard = React.lazy(() => import('../views/DashBoard'))


const routes = [
    {
        name: 'Sign In',
        path: '/signin',
        element: <RouteCondition type={'auth'} children={<Signin/>} />
    }, {
        name: 'Sign Up',
        path: '/signup',
        element: <RouteCondition type={'auth'} children={<Signup/>} />
    }, {
        name: 'Sign out',
        path: '/signout',
        element: <RouteCondition type={'auth'} children={<Signout/>} />
    }, {
        name: 'Dashboard',
        path: '/*',
        element: <RouteCondition type={'private'} children={<Dashboard/>} />
    }
]

export default routes