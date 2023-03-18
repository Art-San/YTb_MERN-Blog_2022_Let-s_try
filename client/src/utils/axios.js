import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://45.146.167.111/api'
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

export default instance
