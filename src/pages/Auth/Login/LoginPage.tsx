import { useState, type FormEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faChartPie, faEye, faEyeSlash, faLock, faWallet } from '@fortawesome/free-solid-svg-icons'
import './LoginPage.css'

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <main className="login-page">
      <section className="login-panel">
        <div className="mobile-brand brand">
          <span className="brand-mark"><FontAwesomeIcon icon={faWallet} /></span>
          <span>Spendwise</span>
        </div>

        <div className="login-box">
          <div className="login-heading">
            <p className="eyebrow">WELCOME BACK</p>
            <h2>Sign in to your account</h2>
            <p>Pick up right where you left off.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Email or username</label>
            <div className="input-wrap">
              <FontAwesomeIcon icon={faWallet} aria-hidden="true" />
              <input id="username" name="username" type="text" placeholder="you@example.com" autoComplete="username" required />
            </div>

            <div className="password-label">
              <label htmlFor="password">Password</label>
              <button type="button" className="forgot-password">Forgot password?</button>
            </div>
            <div className="input-wrap">
              <FontAwesomeIcon icon={faLock} aria-hidden="true" />
              <input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" autoComplete="current-password" required />
              <button className="password-toggle" type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>

            <button className="login-button" type="submit">Sign in <FontAwesomeIcon icon={faArrowRight} /></button>
          </form>

          <p className="signup-prompt">New to Spendwise? <button type="button">Create an account</button></p>
        </div>
      </section>
    </main>
  )
}

export default LoginPage
