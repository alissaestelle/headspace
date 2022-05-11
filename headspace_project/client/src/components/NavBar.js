import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const NavBar = ({ logOut }) => {
  const location = useLocation()

  // useLocation Source: https://www.reddit.com/user/JoeCamRoberon/
  if (location.pathname === '/') {
    return null
  }

  return (
    <div className="Nav">
      <Link to="/" onClick={logOut}>
        Log Out
      </Link>
    </div>
  )
}

export default NavBar
