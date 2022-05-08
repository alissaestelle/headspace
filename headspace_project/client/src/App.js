import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Main from './pages/Main'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Main />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
