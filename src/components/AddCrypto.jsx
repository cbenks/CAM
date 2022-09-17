import Client from '../authentication/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCrypto = ({ authenticated, user }) => {

  const navigate = useNavigate()

  const [cryptoForm, setCryptoForm] = useState({
    name: '',
    amount: 0
  })

  const [nftForm, setNftForm] = useState({
    blockchain: '',
    name: '',
    photo: ''
  })

  const handleChangeCrypto = (e) => {
    setCryptoForm({...cryptoForm, [e.target.name]: e.target.value})
  }

  const handleChangeNft = (e) => {
    setNftForm({...nftForm, [e.target.name]: e.target.value})
  }

  const handleSubmitCrypto = async (e) => {
    e.preventDefault()
    await Client.post('/crypto/', {
      userId: user.id,
      amount: cryptoForm.amount,
      name: cryptoForm.name
    })
    setCryptoForm({
      name: '',
      amount: 0
    })
    navigate('/assets')
  }

  const handleSubmitNft = async (e) => {
    e.preventDefault()
    await Client.post('/nft/', {
      userId: user.id,
      blockchain: nftForm.blockchain,
      name: nftForm.name,
      photo: nftForm.photo
    })
    setNftForm({
      blockchain: '',
      name: '',
      photo: ''
    })
    navigate('/assets')
  }

  let publicOptions =(
    <div>
      <h3>You should not be here.</h3>
    </div>
  )
  let authenticatedOptions = (
    <div>
      <form onSubmit={handleSubmitCrypto} >
        <label htmlFor="name">Name</label>
        <input onChange={handleChangeCrypto} name="name" id="name" type="text" value={cryptoForm.name} required />
        <label htmlFor="amount">Amount</label>
        <input onChange={handleChangeCrypto} name="amount" id="amount" type="number" value={cryptoForm.amount} required/>
        <button className="formbut" disabled={!cryptoForm.name} >Add Crypto Asset</button>
      </form>
      <form onSubmit={handleSubmitNft} >
        <label htmlFor="blockchain">Blockchain</label>
        <input onChange={handleChangeNft} name="blockchain" id="blockchain" type="text" value={nftForm.blockchain} />
        <label htmlFor="name">Name</label>
        <input onChange={handleChangeNft} name="name" id="name" type="text" value={nftForm.name} />
        <label htmlFor="photo">Photo</label>
        <input onChange={handleChangeNft} name="photo" id="photo" type="text" value={nftForm.photo} />
        <button className="formbut" disabled={!nftForm.name} >Add Nft Asset</button>
      </form>
    </div>
  )
  return(
    <div>
      {authenticated ? authenticatedOptions : publicOptions}
    </div>
  )
}

export default AddCrypto