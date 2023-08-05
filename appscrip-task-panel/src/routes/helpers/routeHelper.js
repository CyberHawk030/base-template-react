import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUserInfo } from '../../api/user'

const RouteHelper = () => {
  const dispatch = useDispatch()
  const {isAuth} = useSelector(state => state.user)

  useEffect(() => {
    if (isAuth) {
      fetchUserInfo(dispatch)
    }
  }, [isAuth, dispatch])
  return <React.Fragment />
}

export default RouteHelper
