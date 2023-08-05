import React from "react";
import RouteCondition from "./helpers/routeCondition";

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
