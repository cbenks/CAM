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
          <Route path="/" element={<Home />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
