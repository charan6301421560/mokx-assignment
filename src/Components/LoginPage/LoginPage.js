import React, { useState } from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const isLoginDisabled = !(email && password);
  const history = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setLoginError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setLoginError('');
  };

  const handleLogin = () => {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData && userData.email === email && userData.password === password) {
      // Login is successful, redirect to the desired page (e.g., VedicAIPage)
      history('/vedic-ai');
    } else {
      // Login is unsuccessful, show an error message
      setLoginError('Invalid email or password');
    }
  };

  return (
    <div className="loginPage">
      <div className='login-page-ui'>
        <div className="backArrow">
          <Link to="/Home" className="arrow-link">
            ←
          </Link>
        </div>
        <div className="login-head">
          <h2>Login to Mokx</h2>
          <p>
            Welcome back! Sign in using your social account or email to continue
            with us.
          </p>
          <img
            src="https://i.ibb.co/GxjXXP4/Social-media-uihut.png"
            alt="Social-media-uihut"
            border="0"
          />
        </div>
        <div class="line-or-container">
          <div class="line"></div>
          <span class="or">OR</span>
          <div class="line"></div>
        </div>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {loginError && <p className="error-message">{loginError}</p>}
      </div>
      <div className="login-bottom">
          <button className="loginButton" disabled={isLoginDisabled} onClick={handleLogin}>
            Login in
          </button>
          <div className="forgotPassword">
            <Link to="/home" className="arrow-link f-password">
              Forgot Password?
            </Link>
          </div>
      </div>
    </div>
  );
}

export default LoginPage;
