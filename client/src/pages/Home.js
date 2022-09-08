import Login from '../components/Login'

const Home = ({ authenticated, toggleAuthenticated }) => {
  const authenticatedOptions = (
    <div>
      <h2>You have been authenticated</h2>
    </div>
  )

  const publicOptions = (
    <div>
      <Login toggleAuthenticated={toggleAuthenticated} />
    </div>
  )

  return (
    <div>
      <h2>What is CM? Well let me tell you...</h2>
      {authenticated ? authenticatedOptions : publicOptions}
    </div>
  )
}

export default Home
