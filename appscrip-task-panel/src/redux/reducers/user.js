export const setAuthReducer = (state, action) => {
    state.isAuth = action.isAuth
    state.userId = action.userId

    return state
}

export const setUserReducer = (state, action) => {
    state.name = action.name
    state.email = action.email
    state.lastLogin = action.lastLogin

    return state
}