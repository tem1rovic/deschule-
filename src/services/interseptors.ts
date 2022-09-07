import axios from "axios";
import {IRegister} from "models/index";
import {getAccessToken, getRefreshToken, setAccessToken} from "utils/tokenStorage";

export const API_URL = 'https://api.kom-store.exadot.io/api/v1/'

const $api = axios.create({
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers = {
        Authorization: `Bearer ${getAccessToken()}`,
    }
    return config
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        if (getRefreshToken()) {
            try {
                    const res = await axios.post<IRegister>(`${API_URL}me/refresh/`, { refresh: getRefreshToken() })
                    setAccessToken(res.data.access)
                    return $api.request(originalRequest)
            } catch (e: any) {
                console.warn('Not auth - ' + e.message)
            }
        }
    }
    throw error
})

export default $api