import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import isAuth from '../../lib/isAuth'
import { fetchUserInfo } from '../../api/user'

const RouteHelper = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuth()) {
      fetchUserInfo(dispatch)
    }
  }, [dispatch])
  return <React.Fragment />
}

export default RouteHelper
