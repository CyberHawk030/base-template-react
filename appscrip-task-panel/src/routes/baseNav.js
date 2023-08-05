import React from "react";
import RouteCondition from "./helpers/routeCondition";
// import Signin from '../views/Signin'
// import Signup from '../views/Signup'
// import Signout from '../views/Signout'
// import MainLayout from '../views/MainLayout'
// import Page404 from '../views/Page404'
// import Page500 from '../views/Page500'

const Signin = React.lazy(() => import('../views/Signin'))
const Signup = React.lazy(() => import('../views/Signup'))
const Signout = React.lazy(() => import('../views/Signout'))
const MainLayout = React.lazy(() => import('../views/MainLayout'))
const Page404 = React.lazy(() => import('../views/Page404'))
const Page500 = React.lazy(() => import('../views/Page500'))


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
        element: <RouteCondition type={'private'} children={<Signout/>} />
    }, {
        name: 'MainLayout',
        path: '/*',
        element: <RouteCondition type={'private'} children={<MainLayout/>} />
    }, {
        name: 'Page 404',
        path: '/404',
        element: <Page404 />
    }, {
        name: 'Page 500',
        path: '/500',
        element: <Page500 />
    }
]

export default routes