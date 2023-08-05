import React, { Suspense, useEffect } from 'react'
import RouteHelper from './routes/helpers/routeHelper'
import BaseRoutes from './routes/BaseRoutes'
import store from './redux/store'
import isAuth from './lib/isAuth'
import { getAuthToken } from './lib/getAuthToken'
import decodeJWT from './lib/decodeJWT'
import SuspenseLoader from './views/Loader/SuspenseLoader'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { isAuth: isAuthenticated } = store.getState().user
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth() && !isAuthenticated) {
      decodeJWT(getAuthToken(), store.dispatch, navigate)
    }
  }, [isAuthenticated, navigate])

  return (
    <Suspense fallback={<SuspenseLoader />}>
      <React.Fragment>
        <ToastContainer position='top-right' /> 
        <RouteHelper />
        <BaseRoutes />
      </React.Fragment>
    </Suspense>
  )
}

export default App
