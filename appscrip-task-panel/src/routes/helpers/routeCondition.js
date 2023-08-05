import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RouteCondition = ({ type, children }) => {

    const user = useSelector(state => state.user)

    if(user.isAuth && type === 'auth'){
        return <Navigate to='/dashboard' />
    } else if (!user.Auth && type === 'private'){
        return <Navigate to={'/signin'} />
    }

    return children
}

export default React.memo(RouteCondition)