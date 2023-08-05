import React, { Suspense, useEffect } from 'react'
import RouteHelper from './routes/helpers/routeHelper'
import BaseRoutes from './routes/BaseRoutes'
import store from './redux/store'
import isAuth from './lib/isAuth'
import { getAuthToken } from './lib/getAuthToken'
import decodeJWT from './lib/decodeJWT'
import SuspenseLoader from './views/Loader/SuspenseLoader'

const App = () => {
  const { isAuth: isAuthenticated } = store.getState().user

  useEffect(() => {
    if (isAuth() && !isAuthenticated) {
      decodeJWT(getAuthToken(), store.dispatch)
    }
  }, [isAuthenticated])

  return (
    <Suspense fallback={<SuspenseLoader />}>
      <React.Fragment>
        <RouteHelper />
        <BaseRoutes />
      </React.Fragment>
    </Suspense>
  )
}

export default App
