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

  let [successful, setSuccess] = useState(false)
  let [payload, setPayload] = useState({})
  let [auth, toggleAuth] = useState(false)
  let [user, setUser] = useState({})

  const checkToken = async () => {
    let userInfo = await CheckSession()
    setUser(userInfo)
    console.log(userInfo)
    toggleAuth(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser({})
    console.log(user)
    localStorage.clear()
  }

  return (
    <div className="App">
      <NavBar logout={handleLogOut} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Auth
                newUser={registration}
                setRegistration={setRegistration}
                success={successful}
                setSuccess={setSuccess}
                returnUser={login}
                setLogin={setLogin}
                setPayload={setPayload}
                toggleAuth={toggleAuth}
              />
            }
          />
          <Route
            path="/main"
            element={
              <Main
                user={user}
                setUser={setUser}
                payload={payload}
                success={successful}
                setSuccess={setSuccess}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
