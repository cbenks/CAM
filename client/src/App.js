import Nav from './components/Nav'
import Home from './pages/Home'
import Assets from './pages/Assets'
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
    const id = localStorage.getItem('id')
    const email = localStorage.getItem('email')
    setUser({
      theUser,
      id,
      email
    })
    toggleAuthenticated(true)
  }

  const getUsername = async () => {
    if (user && authenticated) {
      const singleUser = await Client.get(`user/${user.id}`)
      localStorage.setItem('username', singleUser.data.username)
      const savedUsername = localStorage.getItem('username')
      setUsername(savedUsername)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    getUsername()
  }, [user])

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
            element={<Assets authenticated={authenticated} />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
