import { Link } from 'react-router-dom'

const News = ({ authenticated }) => {
  let authenticatedOptions = <div></div>

  let publicOptions = (
    <div>
      <h4>
        Please <Link to="/">Login</Link> <Link to="/register">Register</Link> to
        see news pertaining to your assets!
      </h4>
    </div>
  )

  return (
    <div>
      <h2>im the news page for keeping you up to date</h2>
      {authenticated ? authenticatedOptions : publicOptions}
    </div>
  )
}

export default News
