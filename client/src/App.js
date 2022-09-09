import Nav from './components/Nav'
import Home from './pages/Home'
import Assets from './pages/Assets'
import Register from './pages/Register'
import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState({})

  const handleLogOut = () => {
    setUser({})
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {}

  return (
    <div>
      <Nav authenticated={authenticated} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                authenticated={authenticated}
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
