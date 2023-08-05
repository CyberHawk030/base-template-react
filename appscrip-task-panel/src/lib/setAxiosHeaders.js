import axios from "axios"

const setAxiosHeaders = () => {
    axios.defaults.headers['Authorization'] = localStorage.getItem('auth_token')
}

export default setAxiosHeaders