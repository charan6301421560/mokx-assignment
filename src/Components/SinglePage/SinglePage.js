import React from 'react';
import './SinglePage.css'

const SinglePage = () => {
  const handleClick = () => {
    // Redirect to app.js or any other component when clicked
    // You can use react-router-dom or other navigation methods here
    // For demonstration purposes, we'll use a simple window.location.href redirect.
    window.location.href = '/home';
  };

  return (
    <div className='home' onClick={handleClick} >
      <div style={{ textAlign: 'center' }}>
          <img src="https://i.ibb.co/yf1W4VX/MOkx-logo-2.png" alt="MOkx-logo-2" border="0"/>
      </div>
      <a href="/home" className='bottom-ai'
        onClick={(e) => e.stopPropagation()}
      >
        Back to Vedas
      </a>
    </div>
  );
};

export default SinglePage;
