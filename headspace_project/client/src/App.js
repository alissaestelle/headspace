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
  let [user, setUser] = useState(null)
  let [loginSuccess, setLoginSuccess] = useState(false)
  let [achievements, setAchievements] = useState([])

  const checkToken = async () => {
    let userInfo = await CheckSession()
    setUser(userInfo)
    console.log(userInfo)
    toggleAuth(true)
  }

  const charID = localStorage.getItem('charID')
  const charName = localStorage.getItem('charName')
  const avatar = localStorage.getItem('avatar')

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
                avatar={avatar}
                achievements={achievements}
                setAchievements={setAchievements}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
