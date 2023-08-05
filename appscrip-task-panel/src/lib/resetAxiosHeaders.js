import axios from "axios"

const resetAxiosHeaders = () => {
    axios.defaults.headers['Authorization'] = ''
}

export default resetAxiosHeaders