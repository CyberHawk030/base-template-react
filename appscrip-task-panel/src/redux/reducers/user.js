export const setAuthReducer = (state, action) => {
    state.isAuth = action.payload.isAuth
    state.userId = action.payload.userId

    return state
}

export const setUserReducer = (state, action) => {
    state.name = action.payload.name
    state.email = action.payload.email
    state.lastLogin = action.payload.lastLogin

    return state
}