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
    console.log(res.data.user)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('character', res.data.user)
    return res.data.user
  } catch (e) {
    throw e
  }
}

export const CharRequest = async (data) => {
  try {
    const res = await Client.post('/account/character', data)
    return res.data
  } catch (e) {
    throw e
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/auth/session')
    console.log('Check Session Working')
    return res.data
  } catch (e) {
    throw e
  }
}
