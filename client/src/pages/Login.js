import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormValues({ email: '', password: '' })
    navigate('/home')
  }

  return (
    <div>
      <h1>I will be on the home page to login</h1>
    </div>
  )
}

export default Login
