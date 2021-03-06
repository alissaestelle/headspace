import { useNavigate } from 'react-router-dom'
import { LoginRequest, RegisterRequest } from '../services/Requests'

const Auth = ({
  newUser,
  setRegistration,
  returnUser,
  setLogin,
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
    toggleAuth(true)
    setLoginSuccess(true)
    setLogin({
      username: '',
      password: ''
    })
    navigate('/main')
  }

  return (
    <div className="Auth-Container">
      <h1 id="Title">HeadSpace</h1>
      <div className="Auth-Grid">
        <div className="Login">
          <h1>Hello</h1>
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
              type="password"
              placeholder="Password"
              name="password"
              value={returnUser.password}
              onChange={handleLogin}
            ></input>
            <button>→</button>
          </form>
        </div>
        <div className="Register">
          {loginSuccess ? (
            <h2 id="User-Confirm">←</h2>
          ) : (
            <div>
              <h1>New?</h1>
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
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={newUser.password}
                  onChange={handleRegister}
                ></input>
                <button>→</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Auth
