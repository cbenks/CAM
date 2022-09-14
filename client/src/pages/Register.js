import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../authentication/auth'
const Register = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/')
  }

  return (
    <div>
      <div>
        <form className="registerform" onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              name="username"
              id="username"
              type="text"
              value={formValues.username}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="username">Email</label>
            <input
              onChange={handleChange}
              name="email"
              id="email"
              type="email"
              value={formValues.email}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              name="password"
              id="password"
              type="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            className="formbut"
            disabled={
              !formValues.email ||
              !formValues.password ||
              !formValues.confirmPassword ||
              formValues.password !== formValues.confirmPassword
            }
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
