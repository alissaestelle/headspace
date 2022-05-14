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
    if (res.data.user.character) {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('charID', res.data.user.character.id)
      localStorage.setItem('charName', res.data.user.character.name)
      localStorage.setItem('avatar', res.data.user.character.avatar)
      localStorage.setItem('level', res.data.user.character.level)
      localStorage.setItem('stats', res.data.user.character.stats)
    } else {
      localStorage.setItem('token', res.data.token)
    }
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

export const GetUserChar = async () => {
  try {
    const res = await Client.get('/account/character')
    console.log(res.data)
    return res.data
  } catch (e) {
    throw e
  }
}

export const GetAchievements = async () => {
  try {
    const res = await Client.get('/account/daily')
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
