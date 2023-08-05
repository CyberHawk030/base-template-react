import decoder from 'jwt-decode'
import { setAuth } from '../redux/slices/userSlice';
import removeAuthToken from './removeAuthToken';
import resetAxiosHeaders from './resetAxiosHeaders';

const decodeJWT = (authToken, dispatch, navigate) => {
    try {
        if(!authToken) return
        let data = decoder(authToken.replace('Bearer ',''))
        dispatch(setAuth({ userId: data.userId, isAuth: true }))
    } catch (error) {
        removeAuthToken()
        resetAxiosHeaders()
        navigate('/signin')
        console.log(error);
    }
}

export default decodeJWT