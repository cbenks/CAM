import {Link} from 'react-router-dom'

const Nav = ({ authenticated, handleLogout, user, username }) => {


  let authenticatedOptions = (
    <nav className='nav'>
      <h3>Welcome {username}</h3>
      <Link to="/assets">Assets</Link>
      <Link to="/news">News</Link>
    </nav>
  )
  
  let publicOptions = (
    <nav className='nav'>
      <Link to ="/register">Sign Up</Link>
      <button onClick={handleLogout} >Log Out</button>
    </nav>
  )

  return(
    <header className='nav'>
      <Link to="/">
        <img className='logo' alt="crypto management logo" src='https://freelogocreator.com/user_design/logos/2022/09/08/67545-medium.png' />
      </Link>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav