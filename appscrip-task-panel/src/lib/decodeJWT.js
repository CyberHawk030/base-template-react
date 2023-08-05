import decoder from 'jwt-decode'
import { setAuth } from '../redux/slices/userSlice';

const decodeJWT = (authToken, dispatch) => {
    try {
        if(!authToken) return
        let data = decoder(authToken.replace('Bearer ',''))
        dispatch(setAuth({ userId: data.userId, isAuth: true }))
    } catch (error) {
        console.log(error);
    }
}

export default decodeJWT