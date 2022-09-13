import Client from '../authentication/auth'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Assets = ({ authenticated, user }) => {
  const [crypto, setCrypto] = useState([])
  const [nft, setNft] = useState([])

  useEffect(() => {
    const showCrypto = async () => {
      const res = await Client.get(`/crypto/${user.id}`)
      setCrypto(res.data)
    }
    const showNft = async () => {
      const res = await Client.get(`/nft/${user.id}`)
      setNft(res.data)
    }
    showCrypto()
    showNft()
  }, [user.id])

  const publicOptions = (
    <div>
      <h2>
        Please <Link to="/">Login</Link> or <Link to="/register">Register</Link>{' '}
        to start keeping track of all of your web3 assets in one place!
      </h2>
    </div>
  )
  const authenticatedOptions = (
    <div>
      <h2>you are authenticated</h2>
    </div>
  )

  return (
    <div>
      <h3>your cryptos and nfts will be listed here</h3>
      {authenticated ? authenticatedOptions : publicOptions}
    </div>
  )
}

export default Assets
