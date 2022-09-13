import Client from '../authentication/auth'
import { useState } from 'react'

const AddCrypto = ({ authenticated, user }) => {

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

  }

  const handleChangeNft = (e) => {

  }

  const handleSubmitCrypto = (e) => {

  }

  const handleSubmitNft = (e) => {

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
        <button disabled={!cryptoForm.name} >Add Crypto Asset</button>
      </form>
      <form onSubmit={handleSubmitNft} >
        <label htmlFor="blockchain">Blockchain</label>
        <input onChange={handleChangeNft} name="blockchain" id="blockchain" type="text" value={nftForm.blockchain} />
        <label htmlFor="name">Name</label>
        <input onChange={handleChangeNft} name="name" id="name" type="text" value={nftForm.name} />
        <label htmlFor="photo">Photo</label>
        <input onChange={handleChangeNft} name="photo" id="photo" type="image" value={nftForm.name} />
        <button disabled={!nftForm.name} >Add Nft Asset</button>
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