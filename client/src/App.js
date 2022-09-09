import Nav from './components/Nav'
import Home from './pages/Home'
import Assets from './pages/Assets'
import Register from './pages/Register'
import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CheckSession } from './authentication/auth'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState({})
  const [username, setUsername] = useState('')

  const handleLogout = () => {
    setUser({})
    toggleAuthenticated(false)
    localStorage.clear()
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
        setUsername={setUsername}
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
