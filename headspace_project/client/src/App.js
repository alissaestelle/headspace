import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CheckSession } from './services/AuthStorage'
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

  let [payload, setPayload] = useState(null)
  let [auth, toggleAuth] = useState(false)

  const checkToken = async () => {
    let userInfo = await CheckSession()
    setPayload(userInfo)
    toggleAuth(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header className="App-Header">
        <NavBar />
      </header>
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
                setPayload={setPayload}
                toggleAuth={toggleAuth}
              />
            }
          />
          <Route path="/home" element={<Main />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
