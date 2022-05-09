import Axios from 'axios'

export const localHost = 'http://localhost:3001'
const Client = Axios.create({ baseURL: localHost })

Client.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (e) => Promise.reject(e)
)

export default Client
