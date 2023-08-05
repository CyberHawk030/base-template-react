import React from 'react'
import { Navigate } from 'react-router-dom'
import isAuth from '../../lib/isAuth'

const RouteCondition = ({ type, children }) => {

    if(isAuth() && type === 'auth'){
        return <Navigate to='/dashboard' />
    } else if (!isAuth() && type === 'private'){
        return <Navigate to={'/signin'} />
    }

    return children
}

export default React.memo(RouteCondition)