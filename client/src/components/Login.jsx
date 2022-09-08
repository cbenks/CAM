import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({toggleAuthenticated}) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormValues({ email: '', password: '' })
    toggleAuthenticated(true)
    navigate('/')
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} name="email" type="email" id="email" value={formValues.password} required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input onChange={handleChange}  name="password" type="password" id="password" value={formValues.password} required />
          </div>
          <button disabled={!formValues.email || !formValues.password}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
