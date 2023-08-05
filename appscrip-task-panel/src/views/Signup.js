import React, { useState } from 'react'
import bgimg from '../assets/auth-bg.jpg'
import Input from '../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { signupValidation } from '../validations/auth.validation'
import isEmpty from '../lib/isEmpty'
import { toast } from 'react-toastify'
import { postSignup } from '../api/user'


const initialFormValue = {
  email: '',
  password: '',
  name: '',
  confirmPassword: ''
}

const Signup = () => {

  const [formValue, setFormValue] = useState(initialFormValue)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const {id, value} = e.target
    setFormValue({...formValue, [id]: value})
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      let reqData = { email, password, confirmPassword, name }
      let validate = signupValidation(reqData)
      if(!isEmpty(validate)){
        setErrors(validate)
        return
      }

      let { success, errors, message } = await postSignup(reqData)
      if(success){
        toast.success(message)
        navigate('/signin')
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

  const { email, password, confirmPassword, name } = formValue
  return (
    <div className='auth-page-container' style={{backgroundImage: `url(${bgimg})`}}>
      <form className='glassmorphic-container' onSubmit={handleFormSubmit}>
        <h2 className='tw-text-white tw-text-4xl tw-font-light tw-font-roboto tw-mb-3'>Sign Up</h2>
        <Input
          labelProps={{ htmlFor: 'email', text:'Email' }}
          inputProps={{ id: 'email', name: 'email', type: 'email', placeholder: 'johndoe@email.com', onChange: handleInputChange, value: email }}
          errorMsgProps={{message: errors?.email}}
        />
        <Input
          labelProps={{ htmlFor: 'name', text:'Name' }}
          inputProps={{ id: 'name', name: 'name', type: 'text', placeholder: 'John Doe', onChange: handleInputChange, value: name }}
          errorMsgProps={{message: errors?.name}}
        />
        <Input
          labelProps={{ htmlFor: 'password', text: 'Password' }}
          inputProps={{ id: 'password', name: 'password', type: 'password', placeholder: 'password', onChange: handleInputChange, value: password }}
          errorMsgProps={{message: errors?.password}}
        />
        <Input
          labelProps={{ htmlFor: 'confirmPassword', text: 'Confirm Password' }}
          inputProps={{ id: 'confirmPassword', name: 'confirmPassword', type: 'password', placeholder: 'password', onChange: handleInputChange, value: confirmPassword }}
          errorMsgProps={{message:errors?.confirmPassword}}
        />
        <div>
          <p className='tw-text-white tw-font-roboto tw-m-1'>Already have an account? <Link to={'/signin'}>Signin now</Link></p>
        </div>
        <div className='tw-flex tw-justify-end tw-items-center'>
          <button className='auth-btn' >Get Set Go!</button>
        </div>
      </form>
    </div>
  )
}

export default Signup