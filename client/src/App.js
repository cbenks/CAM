import Nav from './components/Nav'
import AddCrypto from './components/AddCrypto'
import Home from './pages/Home'
import Assets from './pages/Assets'
import News from './pages/News'
import Register from './pages/Register'
import Client from './authentication/auth'
import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { CheckSession } from './authentication/auth'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState({})
  const [username, setUsername] = useState('')
  let navigate = useNavigate()

  const handleLogout = () => {
    setUser({})
    toggleAuthenticated(false)
    localStorage.clear()
    navigate('/')
  }

  const checkToken = async () => {
    const theUser = await CheckSession()
    const num = localStorage.getItem('id')
    const id = parseInt(num)
    const email = localStorage.getItem('email')
    const username = localStorage.getItem('username')
    setUsername(username)
    setUser({
      theUser,
      id,
      email
    })
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <Nav
        authenticated={authenticated}
        handleLogout={handleLogout}
        username={username}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                authenticated={authenticated}
                user={user}
                toggleAuthenticated={toggleAuthenticated}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/assets"
            element={
              <Assets
                authenticated={authenticated}
                user={user}
                username={username}
              />
            }
          />
          <Route
            path="/news"
            element={<News authenticated={authenticated} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/add"
            element={<AddCrypto authenticated={authenticated} user={user} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
