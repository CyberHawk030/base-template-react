import React, { useState } from 'react'
import bgimg from '../assets/auth-bg.jpg'
import Input from '../components/Input'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { signinValidation } from '../validations/auth.validation'
import isEmpty from '../lib/isEmpty'
import { postSignin } from '../api/user'
import { toast } from 'react-toastify'
import { setAuth, setUser } from '../redux/slices/userSlice'
import setAuthToken from '../lib/setAuthToken'
import setAxiosHeaders from '../lib/setAxiosHeaders'

const initialFormValue = {
  email: '',
  password: ''
}

const Signin = () => {
  const [formValue, setFormValue] = useState(initialFormValue)
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const {id, value} = e.target
    setFormValue({...formValue, [id]: value})
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      let reqData = { email, password }
      let validate = signinValidation(reqData)
      if(!isEmpty(validate)){
        setErrors(validate)
        return
      }
      
      let { success, user, errors, message, token, isAuth } = await postSignin(reqData)
    
      if(success){
        toast.success(message)
        if(isAuth){
          dispatch(setUser({ name: user.name, email: user.email, lastLogin: user.lastLogin }))
          dispatch(setAuth({ isAuth, userId: user._id }))
          setAuthToken(token)
          setAxiosHeaders()
          navigate('/dashboard')
        }
      } else {
        if(!isEmpty(errors)){
          setErrors(errors)
          return
        }
        toast.error(message)
      }
    } catch (error) {
      console.log(error)
    }
  }


  const { email, password } = formValue
  return (
    <div className='auth-page-container' style={{backgroundImage: `url(${bgimg})`}}>
      <form className='glassmorphic-container' onSubmit={handleFormSubmit}>
        <h2 className='tw-text-white tw-text-4xl tw-font-light tw-font-roboto tw-mb-3'>Sign In</h2>
        <Input
          labelProps={{ htmlFor: 'email', text: 'Email' }}
          inputProps={{ id: 'email', name: 'email', type: 'email', placeholder: 'johndoe@email.com', onChange: handleInputChange, value: email }}
          errorMsgProps={{message: errors?.email}}
        />
        <Input
          labelProps={{ htmlFor: 'password', text: 'Password' }}
          inputProps={{ id: 'password', name: 'password', type: 'password', placeholder: 'password', onChange: handleInputChange, value: password }}
          errorMsgProps={{message: errors?.password}}
        />
        <div>
          <p className='tw-text-white tw-font-roboto tw-m-1'>Don't have an account? <Link to={'/signup'}>Create it now</Link></p>
        </div>
        <div className='tw-flex tw-justify-end tw-items-center'>
          <button className='auth-btn' >Get Set Go!</button>
        </div>
      </form>
    </div>
  )
}

export default Signin