import {Link} from 'react-router-dom'

const Nav = ({ authenticated, handleLogout, username }) => {

  let authenticatedOptions = (
    <nav className='nav'>
      <h3>Welcome {username}</h3>
      <Link to="/assets">Assets</Link>
      <Link to="/news">News</Link>
      <button onClick={handleLogout} >Log Out</button>
    </nav>
  )
  
  let publicOptions = (
    <nav className='nav'>
      <Link to ="/news">News</Link>
      <Link to="/assets">Assets</Link>
      <Link to ="/register">Register</Link>
    </nav>
  )

  return(
    <header className='nav'>
      <Link to="/">
        <img className='logo' alt="crypto management logo" src='https://freelogocreator.com/user_design/logos/2022/09/08/67545-medium.png' />
      </Link>
      {authenticated ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav