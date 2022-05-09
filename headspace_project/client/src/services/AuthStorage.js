import Client from './API'

export const RegisterRequest = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (e) {
    throw e
  }
}

export const LoginRequest = async (data) => {
  try {
    const res = await Client.post('/auth/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (e) {
    throw e
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/auth/session')
    return res.data
  } catch (e) {
    throw e
  }
}
