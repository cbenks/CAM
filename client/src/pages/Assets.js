import Crypto from '../components/Crypto'
import Nft from '../components/Nft'
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
    <div className="assets">
      <div>
        <h3 className="assetsuser">User {username}'s Crypto</h3>

        {crypto.map((crypto) => (
          <Crypto
            crypto={crypto}
            key={crypto.id}
            authenticated={authenticated}
            user={user}
          />
        ))}
        <h3>Nfts</h3>
        {nft.map((nft) => (
          <Nft
            nft={nft}
            key={nft.id}
            authenticated={authenticated}
            user={user}
          />
        ))}
        <h3>
          Add more assets <Link to="/add">HERE</Link>
        </h3>
      </div>
    </div>
  )

  return <div>{authenticated ? authenticatedOptions : publicOptions}</div>
}

export default Assets
