import axios from 'axios'

// export const BASE_URL = 'http://localhost:3001'
export const BASE_URL = 'https://cory-cm-db.herokuapp.com/'

const Client = axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export const LoginUser = async (data) => {
  try {
    const res = await Client.post('/auth/login', data)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('id', res.data.user.id)
    localStorage.setItem('email', res.data.user.email)
    localStorage.setItem('username', res.data.user.username)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/auth/session')
    return res.data.token
  } catch (error) {
    throw error
  }
}

export default Client
