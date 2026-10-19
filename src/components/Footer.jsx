
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 My Blog. All rights reserved.</p>

      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </footer>
  )
}

export default Footer
