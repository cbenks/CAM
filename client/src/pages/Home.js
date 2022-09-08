import Login from './Login'

const Home = ({ authenticated }) => {
  const authenticatedOptions = (
    <div>
      <h2>You have been authenticated</h2>
    </div>
  )

  const publicOptions = (
    <div>
      <Login />
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
