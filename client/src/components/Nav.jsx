import {Link} from 'react-router-dom'

const Nav = ({ authenticated }) => {

  let authenticatedOptions = (
    <nav className='nav'>
      <h3>Welcome</h3>
      <Link to="/">Home</Link>
      <Link to="/assets">Assets</Link>
      <Link to="/news">News</Link>
    </nav>
  )
  
  let publicOptions = (
    <nav className='nav'>
      <Link to="/">Home</Link>
      <Link to ="/register">Sign Up</Link>
    </nav>
  )

  return(
    <header className='nav'>
      <img className='logo' src='https://freelogocreator.com/user_design/logos/2022/09/08/67545-medium.png' />
      {authenticated ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav