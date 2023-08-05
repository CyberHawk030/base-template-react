import axios from "axios";
import config from ".";
import { getAuthToken } from "../lib/getAuthToken";

axios.defaults.baseURL = config.API_URL
axios.defaults.headers['Authorization'] = getAuthToken()

export default axios