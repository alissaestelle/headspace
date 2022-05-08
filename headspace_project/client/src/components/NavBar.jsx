import { useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()
  
  // useLocation Source: https://www.reddit.com/user/JoeCamRoberon/
  if (location.pathname === '/') {
    return null
  }

  return (
  <div>
    <h1>This is the Nav Bar!</h1>
  </div>
  )
}

export default NavBar