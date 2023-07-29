import React, { useState } from 'react';
import './SignupPage.css';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const history = useNavigate();

  const isSignupDisabled = !(name && email && password && password === confirmPassword);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    if (enteredEmail === '') {
      // If the input field is empty, clear the error message
      setEmailError('');
    } else if (enteredEmail.endsWith('@gmail.com')) {
      setEmailError('');
    } else {
      setEmailError('Invalid email address');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignup = () => {
    // Save user details to localStorage or send to the server for backend processing
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect to login page after signup
    history('/login');
  };

  return (
    <div className="signupPage">
      <div className="backArrow">
        <Link to="/home" className='arrow-link'>←</Link>
      </div>
      <div className='head-signup'>
        <img src="https://i.ibb.co/yf1W4VX/MOkx-logo-2.png" alt="MOkx-logo-2" border="0"/>
        <h2>Signup with <span>Email</span></h2>
        <p>Welcome back! Sign in using your social account or email to continue with us.</p>
      </div>
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        placeholder="Your Name"
        value={name}
        onChange={handleNameChange}
      />

      <label htmlFor="email"
      className={emailError ? 'error-label' : ''}
      >Your Email</label>
      <input
        type="email"
        id="email"
        placeholder="Your Email"
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <p className="error-message">{emailError}</p>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />

      <button
        className="signupButton"
        disabled={isSignupDisabled}
        onClick={handleSignup}
      >
        Create an account
      </button>
    </div>
  );
}

export default SignupPage;
