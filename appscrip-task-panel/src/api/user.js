import axios from '../config/axios'
import handleResponse from '../lib/handleResponse'
import { setUser } from '../redux/slices/userSlice'

export const fetchUserInfo = async (dispatch) => {
  try {
    let {
      data: { success, user },
    } = await axios.get('/userinfo')
    if (success) {
      dispatch(
        setUser({
          name: user.name,
          email: user.email,
          lastLogin: user.lastLogin,
        })
      )
    }
  } catch (err) {
    console.log(err);
  }
}

export const postSignin = async (data) => {
  try {
    let responseData = await axios({
      url: '/signin',
      method: 'post',
      data,
    })

    return handleResponse(responseData, 'success')
  } catch (error) {
    console.log(error);
    return handleResponse(error, 'error')
  }
}

export const postSignup = async (data) => {
  try {
    let responseData = await axios({
      url: '/signup',
      method: 'post',
      data,
    })

    return handleResponse(responseData, 'success')
  } catch (error) {
    console.log(error);
    return handleResponse(error, 'error')
  }
}


export const getCustomerData  = async (data) => {
  try {
    
    let responseData = await axios({
      url: '/customer-detail',
      data,
      method: 'post'
    })
    return handleResponse(responseData, 'success')
  } catch (error) {
    return handleResponse(error, 'error')
  }
}