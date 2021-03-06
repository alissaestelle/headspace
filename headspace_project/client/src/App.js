import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CheckSession } from './services/Requests'
import NavBar from './components/NavBar'
import Auth from './pages/Auth'
import Main from './pages/Main'
import Account from './pages/Account'
import achievements from './achievements'
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
  let [pK, setPK] = useState(0)
  let [loginSuccess, setLoginSuccess] = useState(false)

  let [charName, setCharName] = useState(localStorage.getItem('charName'))
  let [avatar, setAvatar] = useState(localStorage.getItem('avatar'))
  let [level, setLevel] = useState(localStorage.getItem('level'))
  let [stats, setStats] = useState(JSON.parse(localStorage.getItem('stats')))
  let [achieveArr, setAchieve] = useState(achievements)
  let [updates, setUpdates] = useState(
    JSON.parse(localStorage.getItem('updates'))
  )
  let [aTitle, setTitle] = useState(JSON.parse(localStorage.getItem('aTitle')))
  let [aType, setType] = useState(JSON.parse(localStorage.getItem('aType')))
  let [aPoints, storePoints] = useState(
    JSON.parse(localStorage.getItem('aPoints'))
  )
  let [points, setPoints] = useState(0)

  const checkToken = async () => {
    let userInfo = await CheckSession()
    setUser(userInfo)
    console.log(userInfo)
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
    setUser({})
    setPayload({})
    toggleAuth(false)
    setLoginSuccess(false)
    localStorage.clear()
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
                setUser={setUser}
                charID={charID}
                charName={charName}
                setCharName={setCharName}
                avatar={avatar}
                setAvatar={setAvatar}
                level={level}
                setLevel={setLevel}
                stats={stats}
                setStats={setStats}
                achieveArr={achieveArr}
                points={points}
                setPoints={setPoints}
                updates={updates}
                setUpdates={setUpdates}
                aTitle={aTitle}
                setTitle={setTitle}
                aType={aType}
                setType={setType}
                aPoints={aPoints}
                storePoints={storePoints}
              />
            }
          />
          <Route
            path="/account"
            element={
              <Account
                user={user}
                setUser={setUser}
                setPayload={setPayload}
                pK={pK}
                setPK={setPK}
                toggleAuth={toggleAuth}
                setLoginSuccess={setLoginSuccess}
                charID={charID}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
