import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import removeAuthToken from '../lib/removeAuthToken'
import resetAxiosHeaders from '../lib/resetAxiosHeaders'
import { setAuth, setUser } from '../redux/slices/userSlice'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Signout = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    removeAuthToken()
    resetAxiosHeaders()
    dispatch(setUser({ name: '', email: '', lastLogin: '' }))
    dispatch(setAuth({ userId: '', isAuth: false }))
    navigate('/signin')
  })

  return (
    <div className='tw-w-full tw-h-screen tw-flex tw-justify-center tw-items-center'>
      <div className='tw-flex tw-flex-col tw-justify-center tw-items-center'>
      <Spinner />
      <p>Signing Out</p>
      </div>
    </div>
  )
}

export default Signout
