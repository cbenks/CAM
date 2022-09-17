import {Link} from 'react-router-dom'

const Nav = ({ authenticated, handleLogout }) => {

  let authenticatedOptions = (
    <nav className="nav auth">
      <Link to="/assets">Assets</Link>
      <Link to="/news">News</Link>
      <button className="logout" onClick={handleLogout} >Log Out</button>
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
    <header className='nav head'>
      <Link to="/">
        <img className='logo' alt="crypto management logo" src='https://freelogocreator.com/user_design/logos/2022/09/08/67545-medium.png' />
      </Link>
      {authenticated ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav