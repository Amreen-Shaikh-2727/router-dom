
import { Link } from 'react-router-dom'

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="signup-name">Name:</label>
          <input
            type="text"
            id="signup-name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="signup-email">Email:</label>
          <input
            type="email"
            id="signup-email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="signup-password">Password:</label>
          <input
            type="password"
            id="signup-password"
            placeholder="Enter your password"
            minLength={6}
            required
          />

          <button type="submit" className="auth-button">
            SIGN UP
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  )
}

export default Signup
