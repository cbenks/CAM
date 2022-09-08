import {Link} from 'react-router-dom'

const Nav = ({ authenticated }) => {

  let authenticatedOptions = (
    <nav>
      <h3>Welcome</h3>
      <Link to="/">Home</Link>
      <Link to="/assets">Assets</Link>
      <Link to="/news">News</Link>
    </nav>
  )
  
  let publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to ="/register">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </nav>
  )

  return(
    <header className='nav'>
      {authenticated ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav