import Nav from './components/Nav'
import './App.css'
import { useState } from 'react'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)

  return (
    <div>
      <Nav authenticated={authenticated} />
      <main></main>
    </div>
  )
}

export default App
