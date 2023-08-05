import axios from '../config/axios'
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
    console.log('Reach 1');
    console.log(err);
  }
}
