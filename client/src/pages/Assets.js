import Client from '../authentication/auth'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Assets = ({ authenticated, user, username }) => {
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
      <div>
        <h3>{username} Crypto</h3>
        {crypto.map((crypto) => (
          <div key={crypto.id}>
            <span>{crypto.amount} </span>
            <span> {crypto.name}</span>
          </div>
        ))}
        <h4>Nfts</h4>
        {nft.map((nft) => (
          <div key={nft.id}>
            <h3>{nft.name}</h3>
            <img src={nft.photo} alt="" />
            <h4>{nft.blockchain}</h4>
          </div>
        ))}
        <h3>
          Add more assets <Link to="/add">HERE</Link>
        </h3>
      </div>
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
