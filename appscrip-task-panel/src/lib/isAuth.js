const isAuth = () => {
    if(localStorage.getItem('auth_token')){
        return true
    }
    return false
}

export default isAuth