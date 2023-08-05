import {createSlice} from '@reduxjs/toolkit'
import { setAuthReducer, setUserReducer } from '../reducers/user'

const initialState = {
    userId: '',
    name: '',
    lastLogin: '',
    email: '',
    isAuth: false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setAuth: setAuthReducer,
        setUser: setUserReducer
    }
})

export const {setAuth, setUser} = userSlice.actions
export default userSlice.reducer