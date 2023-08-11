import React from 'react'
import { useRoutes } from 'react-router-dom'

const CustomerDetails = React.lazy(() => import('./LayoutViews/CustomerDetails'))
const Page404 = React.lazy(() => import('../Page404'))
const Page500 = React.lazy(() => import('../Page500'))

const routes = [
    {
        name: 'Dashboard',
        path: '/',
        element: <CustomerDetails />
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

const LayoutRoutes = () => {
  return (
    useRoutes(routes)
  )
}

export default LayoutRoutes
