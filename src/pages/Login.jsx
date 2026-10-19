
import { Link } from 'react-router-dom'

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email:</label>
          <input
            type="email"
            id="login-email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            placeholder="Enter your password"
            required
          />

          <button type="submit" className="auth-button">
            LOGIN
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </main>
  )
}

export default Login
