import Client from '../authentication/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Crypto = ({ crypto, authenticated, user }) => {
  let navigate = useNavigate()
  const [edit, toggleEdit] = useState(false)
  const [update, setUpdate] =useState({
    amount: 0
  })


  const handleChange = (e) => {
    setUpdate({...update, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.put(`/crypto/${crypto.id}`, {
      userId: user.id,
      amount: update.amount,
      name: crypto.name
    })
    navigate('/')
  }



  return(
    <div>
      <div>
        {edit && authenticated ? (
          <div>
            <form onSubmit={handleSubmit} >
              <label htmlFor="amount">Amount</label>
              <input onChange={handleChange} name="amount" id="amount" type="number" value={update.amount} required/>
              <button className="formbut">update</button>
            </form>
          </div>
        ) : (null)}
      </div>
      <div>
        <span>{crypto.amount} </span>
        <span> {crypto.name} </span>
        <button className="assbut"
          onClick={async () => {
            const cryptoDelete = parseInt(crypto.id)
            await Client.delete(`/crypto/${cryptoDelete}`)
            navigate("/home")
          }}
        >
          x
        </button>
        <button className="formbut" onClick={() => {
            toggleEdit(true)
          }} >Edit</button>
      </div>
    </div>
  )
}

export default Crypto