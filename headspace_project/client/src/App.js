import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CheckSession } from './services/Requests'
import NavBar from './components/NavBar'
import Auth from './pages/Auth'
import Main from './pages/Main'
import './styles/App.css'

function App() {
  let [registration, setRegistration] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  })

  let [login, setLogin] = useState({
    username: '',
    password: ''
  })

  let [payload, setPayload] = useState({})
  let [auth, toggleAuth] = useState(false)
  let [user, setUser] = useState({})
  let [loginSuccess, setLoginSuccess] = useState(false)
  let [achievements, setAchieve] = useState([])
  let [charName, setCharName] = useState(localStorage.getItem('charName'))
  let [avatar, setAvatar] = useState(localStorage.getItem('avatar'))
  let [level, setLevel] = useState(localStorage.getItem('level'))
  let [points, setPoints] = useState(0)

  const checkToken = async () => {
    let userInfo = await CheckSession()
    setUser(userInfo)
    toggleAuth(true)
  }

  const charID = localStorage.getItem('charID')
  // const charName = localStorage.getItem('charName')
  // const avatar = localStorage.getItem('avatar')
  // const level = localStorage.getItem('level')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
    toggleAuth(false)
    setLoginSuccess(false)
  }

  return (
    <div className="App">
      <NavBar logOut={handleLogOut} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Auth
                newUser={registration}
                setRegistration={setRegistration}
                returnUser={login}
                setLogin={setLogin}
                payload={payload}
                setPayload={setPayload}
                loginSuccess={loginSuccess}
                setLoginSuccess={setLoginSuccess}
                toggleAuth={toggleAuth}
              />
            }
          />
          <Route
            path="/main"
            element={
              <Main
                payload={payload}
                charID={charID}
                charName={charName}
                setCharName={setCharName}
                avatar={avatar}
                setAvatar={setAvatar}
                level={level}
                setLevel={setLevel}
                points={points}
                setPoints={setPoints}
                achievements={achievements}
                setAchieve={setAchieve}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
