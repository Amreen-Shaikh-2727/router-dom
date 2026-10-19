
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/dashboard" className="logo">
        <span>✦</span>
        <small>MY BLOG</small>
      </Link>

      <Link to="/home" className="home-link">
        Home
      </Link>

      <div className="nav-buttons">
        <Link to="/login" className="nav-button">Login</Link>
        <Link to="/signup" className="nav-button">Signup</Link>
      </div>
    </nav>
  )
}

export default Navbar
