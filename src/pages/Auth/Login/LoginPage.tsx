import { useState, type FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChartPie,
  faEye,
  faEyeSlash,
  faLock,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import "./LoginPage.css";
import { login } from "../../../services/authServices";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // form data
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
      return;
    }

    const loginData = {
      email,
      password,
    };

    try{
      const data = await login(loginData);

      if(data.success)
      {
        setErrorMessage("");
        console.log("Login Success")
      }
      else
      {
        setErrorMessage(data.message || "Unable to sign in. Please try again.");
      }
      
    }
    catch(error){
      console.error(error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="login-page">
      <section className="login-panel">
        <div className="mobile-brand brand">
          <span className="brand-mark">
            <FontAwesomeIcon icon={faWallet} />
          </span>
          <span>Spendwise</span>
        </div>

        <div className="login-box">
          <div className="login-heading">
            <p className="eyebrow">WELCOME BACK</p>
            <h2>Sign in to your account</h2>
            <p>Pick up right where you left off.</p>
          </div>

          {errorMessage && (
            <div className="login-error" role="alert" aria-live="polite">
              <span className="login-error-mark" aria-hidden="true">!</span>
              <p>{errorMessage}</p>
            </div>
          )}

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Email</label>
            <div className="input-wrap">
              <FontAwesomeIcon icon={faWallet} aria-hidden="true" />
              <input
                id="username"
                name="email"
                type="text"
                placeholder="you@example.com"
                autoComplete="username"
                required
              />
            </div>

            <div className="password-label">
              <label htmlFor="password">Password</label>
              <button type="button" className="forgot-password">
                Forgot password?
              </button>
            </div>
            <div className="input-wrap">
              <FontAwesomeIcon icon={faLock} aria-hidden="true" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
              <button
                className="password-toggle"
                type="button"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>

            <button className="login-button" type="submit">
              Sign in <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>

          <p className="signup-prompt">
            New to Spendwise? <button type="button">Create an account</button>
          </p>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
