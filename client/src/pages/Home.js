import Login from './Login'

const Home = ({ authenticated }) => {
  return (
    <div>
      <h2>What is CM? Well let me tell you...</h2>
      <Login />
    </div>
  )
}

export default Home
