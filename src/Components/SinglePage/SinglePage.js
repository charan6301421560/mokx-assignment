import React from 'react';

const SinglePage = () => {
  const handleClick = () => {
    // Redirect to app.js or any other component when clicked
    // You can use react-router-dom or other navigation methods here
    // For demonstration purposes, we'll use a simple window.location.href redirect.
    window.location.href = '/home';
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <div style={{ textAlign: 'center' }}>
          <img src="https://i.ibb.co/yf1W4VX/MOkx-logo-2.png" alt="MOkx-logo-2" border="0"/>
      </div>
      <a
        href="/home"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '18px',
          textDecoration: 'none',
          color: '#69235B',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        Back to Vedas
      </a>
    </div>
  );
};

export default SinglePage;
