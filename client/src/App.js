import Nav from './components/Nav'
import Home from './pages/Home'
import Assets from './pages/Assets'
import Register from './pages/Register'
import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)

  return (
    <div>
      <Nav authenticated={authenticated} />
      <main>
        <Routes>
          <Route path="/" element={<Home authenticated={authenticated} />} />
          <Route
            path="/assets"
            element={<Assets authenticated={authenticated} />}
          />
          <Route
            path="/register"
            element={<Register authenticated={authenticated} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
