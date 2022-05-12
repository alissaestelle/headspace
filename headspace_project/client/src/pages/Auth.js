import { useNavigate } from 'react-router-dom'
import { LoginRequest, RegisterRequest } from '../services/Requests'

const Auth = ({
  newUser,
  setRegistration,
  returnUser,
  setLogin,
  // payload,
  setPayload,
  loginSuccess,
  setLoginSuccess,
  toggleAuth
}) => {
  let navigate = useNavigate()

  const handleRegister = (e) => {
    setRegistration({ ...newUser, [e.target.name]: e.target.value })
  }

  const submitRegister = async (e) => {
    e.preventDefault()
    await RegisterRequest(newUser)
    setLoginSuccess(true)
    setRegistration({
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    })
    navigate('/')
  }

  const handleLogin = (e) => {
    setLogin({ ...returnUser, [e.target.name]: e.target.value })
  }

  const submitLogin = async (e) => {
    e.preventDefault()
    const credentials = await LoginRequest(returnUser)
    setPayload(credentials)
    console.log(credentials)
    // console.log(payload) > Returns Empty Obj
    toggleAuth(true)
    setLoginSuccess(true)
    setLogin({
      username: '',
      password: ''
    })
    navigate('/main')
  }

  return (
    <div className="Login">
      <div>
        <h3>Sign In</h3>
        <form onSubmit={submitLogin}>
          <input
            required
            placeholder="Username"
            name="username"
            value={returnUser.username}
            onChange={handleLogin}
          ></input>
          <input
            required
            placeholder="Password"
            name="password"
            value={returnUser.password}
            onChange={handleLogin}
          ></input>
          <button>Submit</button>
        </form>
      </div>
      {loginSuccess ? (
        <div>
          <h3>Registration Complete. Please Log In.</h3>
        </div>
      ) : (
        <div>
          <h3>New User</h3>
          <form onSubmit={submitRegister}>
            <input
              required
              placeholder="First Name"
              name="firstName"
              value={newUser.firstName}
              onChange={handleRegister}
            ></input>
            <input
              required
              placeholder="Last Name"
              name="lastName"
              value={newUser.lastName}
              onChange={handleRegister}
            ></input>
            <input
              required
              placeholder="Username"
              name="username"
              value={newUser.username}
              onChange={handleRegister}
            ></input>
            <input
              required
              placeholder="Password"
              name="password"
              value={newUser.password}
              onChange={handleRegister}
            ></input>
            <button>Submit</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Auth
