import Login from '../components/Login'

const Home = ({ authenticated, toggleAuthenticated, setUser, username }) => {
  const authenticatedOptions = (
    <div className="welcome">
      <h2>Welcome {username}</h2>
    </div>
  )

  const publicOptions = (
    <div>
      <Login toggleAuthenticated={toggleAuthenticated} setUser={setUser} />
    </div>
  )

  return (
    <div className="home">
      {authenticated ? authenticatedOptions : publicOptions}
      <section className="about">
        <h1 className="sec">
          <em>What is CM? </em>
        </h1>
        <p>
          CM stands for Crypto management. It is an application where you can
          easily keep track of all of your current web3 assets in one place
        </p>
      </section>
      <section className="about">
        <h1 className="sec">
          <i>Why use CM?</i>
        </h1>
        <p>
          If you are involved in web3, things can messy quickly. Between the
          different exchanges you may find yourself using to get those off the
          grid altcoins you want, the many wallets you may have, and the
          different networks and blockchains you may be using, things can get
          convoluted and overwhelming quick. Oh and lets not forget about any
          non-fungible tokens you may have!
        </p>
        <h1 className="sec">
          Enter CM - the free easy to use oranganizational tool for your web3
          needs
        </h1>
      </section>
      <section className="about">
        <h1 className="sec">But wait, there's more to come...</h1>
        <ul>
          <li>-Daily news feed</li>
          <li>-Live prices</li>
          <li>-Average price column</li>
          <li>-Total Value column</li>
        </ul>
      </section>
      <div className="me">Developed by Cory B</div>
    </div>
  )
}

export default Home
