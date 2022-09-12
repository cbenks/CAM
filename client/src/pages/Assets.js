import Client from '../authentication/auth'

const Assets = ({ authenticated }) => {
  const authenticatedOptions = (
    <div>
      <h2>you are authenticated</h2>
    </div>
  )
  const publicOptions = (
    <div>
      <h2>
        Please login or register to start keeping track of all of your web3
        assets in one place!
      </h2>
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
