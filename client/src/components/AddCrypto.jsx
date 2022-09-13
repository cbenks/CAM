import Client from '../authentication/auth'
import { useState } from 'react'

const AddCrypto = ({ authenticated, user }) => {

  const [nftForm, setNftForm] = useState({

  })
  const [cryptoForm, setCryptoForm] = useState({

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
      <form>
        <label htmlFor="name">Name</label>
        <input onChange={} name="name" id="name" type="text" />
        <label htmlFor="amount">Amount</label>
        <input onChange={} name="amount" id="amount" type="number" />
        <button>Add Crypto Asset</button>
      </form>
      <form>
        <label></label>
        <input />
        <label></label>
        <input />
        <button>Add Nft Asset</button>
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